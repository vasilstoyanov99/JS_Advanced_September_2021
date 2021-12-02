import { html } from '../lib.js';
import { getGameById, deleteGameById, getAllCommentsByGameId, addComment } from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (game, canUserModify, onDelete, comments, canUserComment, onComment) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">

            <div class="game-header">
                <img class="game-img" src="${game.imageUrl}" />
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">${game.category}</p>
            </div>

            <p class="text">${game.summary}</p>
            
            <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length === 0 
                        ? html`<p class="no-comment">No comments.</p>`
                        : html`<ul id="commentsSection">${comments.map(commentTemplate)}</ul>`}
            </div>
            
            ${canUserModify 
                    ? html`<div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click="${onDelete}" href="javascript:void(0)" class="button">Delete</a>
                </div>` 
                    : null}
        </div>
        
        ${canUserComment 
                ? html`
                    <article class="create-comment">
                        <label>Add new comment:</label>
                        <form @submit="${onComment}" class="form">
                            <textarea name="comment" placeholder="Comment......"></textarea>
                            <input class="btn submit" type="submit" value="Add Comment">
                        </form>
                    </article>`
                : null}

    </section>`;

const commentTemplate = (object) => html`
    <li class="comment">
        <p>${object.comment}</p> 
    </li>`;

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    const game = await getGameById(gameId);
    const userData = getUserData();
    const canUserModify = userData && userData._id === game._ownerId;
    const canUserComment = userData && userData._id !== game._ownerId;
    const comments = await getAllCommentsByGameId(gameId);
    ctx.render(detailsTemplate(game, canUserModify, onDelete, comments, canUserComment, onComment));
    
    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this meme?');

        if (choice) {
            await deleteGameById(gameId);
            return ctx.page.redirect('/');
        }
    }

    async function onComment(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const comment = formData.get('comment');

        if (comment === '') {
            return alert('You cannot post an empty comment!');
        }

        await addComment({ gameId, comment });
        form.reset();
        await ctx.page.redirect(`/details/${gameId}`);
    }
}