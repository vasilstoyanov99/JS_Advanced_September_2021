function solve() {
    const adoption = document.querySelector('#adoption ul');
    document.querySelector('#container button')
        .addEventListener('click', add);
    adoption.addEventListener('click', contactWithOwner);
    const adopted = document.querySelector('#adopted ul');
    adopted.addEventListener('click', deleteElement);

    function add(ev) {
        ev.preventDefault();
        const div = ev.target.parentElement;
        const nameElement = div.querySelector('input[placeholder="Name"]');
        const ageElement = div.querySelector('input[placeholder="Age"]');
        const kindElement = div.querySelector('input[placeholder="Kind"]');
        const currentOwnerElement = div.querySelector('input[placeholder="Current Owner"]');

        const nameInput = nameElement.value;
        const kindInput = kindElement.value;
        const currentOwnerInput = currentOwnerElement.value;
        const ageInput = Number(ageElement.value);

        if (nameInput !== '' && kindInput !== '' && currentOwnerInput !== '' && ageElement.value !== '' && !Number.isNaN(ageInput)) {
         const li = document.createElement('li');
         const p = document.createElement('p');
         createStrongAndAppend(p, nameInput, ' is a ');
         createStrongAndAppend(p, ageInput, ' year old ');
         createStrongAndAppend(p, kindInput, null);
         li.appendChild(p);
         createAndAppendText('span', 'textContent', `Owner: ${currentOwnerInput}`, li);
            createAndAppendText('button', 'textContent', 'Contact with owner', li);
            adoption.appendChild(li);
            clear(nameElement, kindElement, currentOwnerElement, ageElement);
        }

        function createStrongAndAppend(parent, content, text) {
            const strong = document.createElement('strong');
            strong.textContent = content;
            parent.appendChild(strong);
            if (text !== null) {
                const textNode = document.createTextNode(text);
                parent.appendChild(textNode);
            }
        }

        function clear(...elements) {
            elements.forEach(e => e.value = '');
        }
    }

    function contactWithOwner({target}) {
        if (target.tagName === 'BUTTON') {
            const targetTextContent = target.textContent;
            if (targetTextContent === 'Contact with owner') {
                const parent = target.parentElement;
                const div = document.createElement('div');
                createAndAppendText('input', 'placeholder', 'Enter your names', div);
                createAndAppendText('button', 'textContent', 'Yes! I take it!', div);
                parent.appendChild(div);
                parent.removeChild(target);
            } else {
                const li = target.parentElement.parentElement;
                const newOwnerInput = li.querySelector('div input').value;

                if (newOwnerInput !== '') {
                    const div = li.querySelector('div');
                    li.removeChild(div);
                    li.querySelector('span').textContent = `New Owner: ${newOwnerInput}`;
                    createAndAppendText('button', 'textContent', 'Checked', li);
                    adopted.appendChild(li);
                }
            }
        }
    }

    function createAndAppendText(element, type, text, parent) {
        const el = document.createElement(element);
        el[type] = text;
        parent.appendChild(el);
    }

    function deleteElement({target}) {
        if (target.tagName === 'BUTTON') {
            const element = target.parentElement;
            adopted.removeChild(element);
        }
    }
}

