import { html } from '../lib.js';
import { getAlbumsByName } from "../api/data.js";
import { getUserData } from "../util.js";

const searchTemplate = (onSearch) => html`
   <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click="${onSearch}" class="button-list">Search</button>
            </div>

       <h2>Results:</h2>
       
       <div class="search-result"></div>
        </section>
`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSearch));
    
    async function onSearch() {
        const inputField = document.getElementById('search-input');
        const name = inputField.value;
        const searchResultDiv = document.querySelector('.search-result');

        if (name === '') {
            return alert('The search therm cannot be empty!');
        }

        const albums = await getAlbumsByName(name);
        searchResultDiv.replaceChildren();

        if (albums.length > 0) {
            searchResultDiv.innerHTML += albums.map(returnSearchResultCard);
        } else {
            searchResultDiv.innerHTML += '<p class="no-result">No result.</p>';
        }

        function returnSearchResultCard(album) {
            return `
             <div class="card-box">
               <img src="${album.imgUrl}">
               <div>
                   <div class="text-center">
                       <p class="name">Name: ${album.name}</p>
                       <p class="artist">Artist: ${album.artist}</p>
                       <p class="genre">Genre: ${album.genre}</p>
                       <p class="price">Price: $${album.price}</p>
                       <p class="date">Release Date: ${album.releaseDate}</p>
                   </div>
                   ${checkIfDetailsButtonShouldBeShown() 
                        ? `<div class="btn-group">
                       <a href="/details/${album._id}" id="details">Details</a>
                   </div>` 
                        : null}
               </div>
           </div>
            `;
        }

        function checkIfDetailsButtonShouldBeShown() {
            const userData = getUserData();
            return  userData !== null;
        }
    }
}