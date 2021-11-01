async function solution() {
    const mainSection = document.getElementById('main');
    const data = await fetchAndReturnData('http://localhost:3030/jsonstore/advanced/articles/list');

    for (const d of data) {
        const id = d['_id'];
        const title = d['title'];
        const extraData = await fetchAndReturnData(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
        const button = createStructure('button', ['button'], 'More');
        button.id = id;
        const profileDiv = createStructure('div', ['accordion'],
            createStructure('div', ['head'],
                createStructure('span', [], title),
                button
            ),
            createStructure('div', ['extra'],
                createStructure('p', [], extraData.content)
            )
        );
        mainSection.appendChild(profileDiv);
    }

    mainSection.addEventListener('click', toggle);

    function createStructure(type, elClasses, ...content) {
        const element = document.createElement(type);

        if (elClasses.length > 0) {
            elClasses.forEach(c => element.classList.add(c));
        }

        for (let item of content) {
            if (typeof item === 'string') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }

    async function fetchAndReturnData(url) {
        try {
            let response = await fetch(url);

            if (response.status !== 200) {
                throw new Error('Error');
            }
            return await response.json();

        } catch (error) {
            alert(error.message);
        }
    }

    function toggle({target}) {
        if (target.tagName === 'BUTTON') {
            const accordionDiv = target.parentElement.parentElement;
            let extraTextElement = accordionDiv.querySelector('.extra');

            if (target.textContent === 'More'){
                extraTextElement.style.display = 'block';
                target.textContent = 'Less';
            } else if (target.textContent === 'Less'){
                extraTextElement.style.display = 'none';
                target.textContent = 'More';
            }
        }
    }
}

solution();