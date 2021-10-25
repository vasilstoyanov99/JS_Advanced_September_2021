window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn')
        .addEventListener('click', addSong);
    const allHitsContainer = document.querySelector('#all-hits .all-hits-container');
    const savedSongsContainer = document.querySelector('#saved-hits .saved-container');

    function addSong(ev) {
        ev.preventDefault();
        const parent = ev.target.parentElement;
        const inputs = Array.from(parent.querySelectorAll('input'));
        const genre = inputs[0].value;
        const song = inputs[1].value;
        const author = inputs[2].value;
        const date = inputs[3].value;

        if (genre !== '' && song !== '' && author !== '' && date !== '') {
            const img = document.createElement('img');
            img.src = './static/img/img.png';
            const saveBtn = createStructure('button', 'save-btn', 'Save song');
            const likeBtn = createStructure('button', 'like-btn', 'Like song');
            likeBtn.addEventListener('click', likeSong);
            const deleteBtn = createStructure('button', 'delete-btn', 'Delete');
            deleteBtn.addEventListener('click', deleteSong);
            saveBtn.addEventListener('click', saveSong.bind(null, saveBtn, likeBtn));

            const div = createStructure('div', 'hits-info',
                img,
                createStructure('h2', undefined, `Genre: ${genre}`),
                createStructure('h2', undefined, `Name: ${song}`),
                createStructure('h2', undefined, `Author: ${author}`),
                createStructure('h3', undefined, `Date: ${date}`),
                saveBtn,
                likeBtn,
                deleteBtn);
            allHitsContainer.appendChild(div);
            inputs.forEach(i => i.value = '');
        }

        function createStructure(type, elClass, ...content) {
            const element = document.createElement(type);

            if (elClass !== undefined) {
                element.classList.add(elClass);
            }

            for (let item of content) {
                if (typeof item === 'string') {
                    item = document.createTextNode(item);
                }

                element.appendChild(item);
            }

            return element;
        }
    }

    function likeSong(ev) {
        let totalLikesElement = document.querySelector('#total-likes .likes p');
        let totalLikesString = totalLikesElement.textContent;
        let totalLikes = Number(totalLikesString.match(/\d/)[0]);
        totalLikes++;
        totalLikesElement.textContent = `Total Likes: ${totalLikes}`;
        ev.target.disabled = true;
    }

    function saveSong(saveBtn, likeBtn, ev) {
        const div = ev.target.parentElement;
        div.removeChild(saveBtn);
        div.removeChild(likeBtn);
        savedSongsContainer.appendChild(div);
    }

    function deleteSong(ev) {
        const div = ev.target.parentElement;
        div.remove();
    }
}