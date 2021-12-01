import { html } from '../lib.js';
import {deleteBook, getBookById, getCurrentUserLikeByBookId,
        addLike, getLikesCountByBookId} from "../api/data.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isPostCreator, cannotLike, onDelete, onLike) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src="${book.imageUrl}"></p>
            <div class="actions">
                ${isPostCreator 
                        ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                        <a class="button" @click="${onDelete}">Delete</a>` 
                        : null}
                ${cannotLike
                        ? null 
                        : html`<a id="likeBtn" class="button" @click="${onLike}">Like</a>`}
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: 0</span>
                </div>
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>`;

export async function detailsPage(ctx) {
    const bookId = ctx.params.id;
    const book = await getBookById(bookId);
    const userData = getUserData();
    const isPostCreator = userData !== null && userData._id === book._ownerId;
    const isUserGuest = userData === null;

    if (isUserGuest === false) {
        const currentUserLikeByBookId = await getCurrentUserLikeByBookId(bookId, userData._id);
        const cannotLike = currentUserLikeByBookId === 1 || isPostCreator === true;
        ctx.render(detailsTemplate(book, isPostCreator, cannotLike, onDelete, onLike));
    } else {
        ctx.render(detailsTemplate(book, isPostCreator, isUserGuest, onDelete, onLike));
    }

    await updateLikesCount();

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this meme?');

        if (choice) {
            await deleteBook(bookId);
            return ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await addLike(bookId);
        await updateLikesCount();
        document.getElementById('likeBtn').style.display = 'none';
    }

    async function updateLikesCount() {
        const likesCount = await getLikesCountByBookId(bookId);
        const likesSpan = document.getElementById('total-likes');
        likesSpan.textContent = `Likes: ${likesCount}`;
    }
}