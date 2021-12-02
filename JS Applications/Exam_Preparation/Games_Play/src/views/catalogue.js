import { html } from '../lib.js';
import { getAllGames } from "../api/data.js";

const catalogueTemplate = (games) => html`
    <section id="catalog-page">
        <h1>All Games</h1>
        ${games.length === 0
                ? html`<h3 class="no-articles">No articles yet</h3>`
                : games.map(gameTemplate)}
    </section>`;

const gameTemplate = (game) => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src="${game.imageUrl}">
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>`;

export async function cataloguePage(ctx) {
    const games = await getAllGames();
    ctx.render(catalogueTemplate(games));
}