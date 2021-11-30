import { html } from '../lib.js';
import { getMyMemes } from "../api/data.js";
import { getUserData } from "../util.js";

const profileTemplate = (myMemes, userData) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" 
                 src="${userData.gender === 'female' 
                    ? '/images/female.png'
                    : '/images/male.png'}">
            <div class="user-content">
                <p>Username: ${userData.username}</p>
                <p>Email: ${userData.email}</p>
                <p>My memes count: ${myMemes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            ${myMemes.length === 0 
                    ? html`<p class="no-memes">No memes in database.</p>` 
                    : myMemes.map(memeCard)}
        </div>
    </section>`;

const memeCard = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>`;

export async function profilePage(ctx) {
    const userData = getUserData();
    const myMemes = await getMyMemes(userData._id);
    ctx.render(profileTemplate(myMemes, userData));
}