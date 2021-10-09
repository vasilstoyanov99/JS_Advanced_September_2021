function solve() {
    const moviesList = document.querySelector('#movies ul');
    const archivedMoviesList = document.querySelector('#archive ul');
    const textContent = 'textContent';
    const buttonTag = 'BUTTON';
    document.querySelector('#add-new button')
        .addEventListener('click', addMovieOnScreen);
    document.querySelector('#movies ul')
        .addEventListener('click', archiveMovie);
    document.getElementById('archive')
        .addEventListener('click', deleteArchivedMovie);

    function addMovieOnScreen(e) {
        e.preventDefault();
        const input = Array.from(document.getElementById('container').children)
            .filter(a => a.tagName != buttonTag);
        const price = Number(input.pop().value);
        if (typeof price === 'number'){
            const name = input.shift().value;
            const hall = input.shift().value;
            if (name !== '' && hall !== ''){
                const div = createElement('div');
                    div.appendChild(createElement('strong', textContent,
                        price.toFixed(2)));
                    div.appendChild(createElement
                        ('input', 'placeholder', 'Tickets Sold'))
                    div.appendChild(createElement('button', textContent,'Archive'));
                const li = createElement('li');
                    li.appendChild(createElement('span', textContent, name))
                    li.appendChild(createElement('strong', textContent,
                        `Hall: ${hall}`, ))
                    li.appendChild(div);
                moviesList.appendChild(li);
                console.log();
            }
        }
    }

    function archiveMovie({target}) {
        if (target.tagName === buttonTag){
            const ticketsSold = Number(target.parentElement
                .querySelector('input').value);
            if (typeof ticketsSold === 'number'){
                const movieLi = target.parentElement.parentElement;
                moviesList.removeChild(movieLi);
                const archiveLi = createElement('li');
                archiveLi.appendChild(createElement('span', textContent,
                    movieLi.querySelector('span').textContent));
                const profit = Number(movieLi.querySelector('div strong').textContent) * ticketsSold;
                archiveLi.appendChild(createElement('strong', textContent, `Total amount: ${profit.toFixed(2)}`));
                archiveLi.appendChild(createElement('button', textContent, 'Delete'));
                archivedMoviesList.appendChild(archiveLi);
            }
        }
    }

    function deleteArchivedMovie({target}) {
        if (target.tagName === buttonTag && target.textContent === 'Delete'){
            const archivedMovieLi = target.parentElement;
            archivedMoviesList.removeChild(archivedMovieLi);
        } else if (target.tagName === buttonTag && target.textContent === 'Clear'){
            const toDelete = Array.from(archivedMoviesList.children);
            for (const toDeleteElement of toDelete) {
                archivedMoviesList.removeChild(toDeleteElement);
            }
        }
    }

    function createElement(type, contentType, content){
        const element = document.createElement(type);
        if (content){
            element.textContent = content;
        }
        return element;
    }
}