import { html } from '../lib.js';
import { getAlbumById, deleteAlbumById } from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, canUserModify, onDelete) => html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src="${album.imgUrl}">
            </div>
            <div class="albumInfo">
                <div class="albumText">

                    <h1>Name: ${album.name}</h1>
                    <h3>Artist: ${album.artist}</h3>
                    <h4>Genre: ${album.genre}</h4>
                    <h4>Price: $${album.price}</h4>
                    <h4>Date: ${album.releaseDate}</h4>
                    <p>Description: ${album.description}</p>
                </div>

                ${canUserModify
                        ? html`
                            <div class="actionBtn">
                                <a href="/edit/${album._id}" class="edit">Edit</a>
                                <a href="#" @click="${onDelete}" class="remove">Delete</a>
                            </div>` 
                        : null}
            </div>
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const albumId = ctx.params.id;
    const userData = getUserData();
    const album = await getAlbumById(albumId);
    const canUserModify =  userData && userData._id === album._ownerId;
    ctx.render(detailsTemplate(album, canUserModify, onDelete));
    
    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this meme?');

        if (choice) {
            await deleteAlbumById(albumId);
            return ctx.page.redirect('/catalog');
        }
    }
}