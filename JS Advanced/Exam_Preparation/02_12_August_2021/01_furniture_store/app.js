window.addEventListener('load', solve);

function solve() {
    document.querySelector('form button')
        .addEventListener('click', addFurniture);
    const furnitureList = document.querySelector('#furniture-list');
    const totalPriceEl = document.querySelector('.total-price');

    function addFurniture(ev) {
        ev.preventDefault();
        const form = ev.target.parentElement;
        const inputElements = Array.from(form.querySelectorAll('input'));
        inputElements.push(form.querySelector('#description'));
        const model = inputElements[0].value;
        const year = Number(inputElements[1].value);
        const price = Number(inputElements[2].value);
        const description = inputElements[3].value;

        if (model !== '' && description !== ''
            && !Number.isNaN(year) && year >= 0 && !Number.isNaN(price) && price >= 0) {
            const trOne = document.createElement('tr');
            trOne.classList.add('info');
            createAndAppend('td', model, trOne);
            createAndAppend('td', price.toFixed(2), trOne);
            const td = document.createElement('td');
            const moreInfoBtn = createAndAppend('button', 'More Info', td, 'moreBtn');
            const buyBtn = createAndAppend('button', 'Buy it', td, 'buyBtn');
            trOne.appendChild(td);

            const trTwo = document.createElement('tr');
            trTwo.classList.add('hide');
            createAndAppend('td', `Year: ${year}`, trTwo);
            createAndAppend('td', `Description: ${description}`, trTwo, undefined, 3);
            moreInfoBtn.addEventListener('click', showOrHide.bind(null, trTwo));
            buyBtn.addEventListener('click', deleteAndIncrease.bind(null, trOne, trTwo, price));
            furnitureList.appendChild(trOne);
            furnitureList.appendChild(trTwo);
            inputElements.forEach(e => e.value = '');
        }

        function createAndAppend(type, content, parent, className, colSpan) {
            const element = document.createElement(type);
            element.textContent = content;

            if (className !== undefined) {
                element.classList.add(className);
            }

            if (colSpan !== undefined) {
                element.colSpan = colSpan;
            }

            parent.appendChild(element);

            return element;
        }
    }

    function showOrHide(trTwo, ev) {
        const btn = ev.target;
        if (btn.textContent === 'More Info') {
            btn.textContent = 'Less Info';
            trTwo.style.display = 'contents';
        } else {
            btn.textContent = 'More Info';
            trTwo.style.display = 'none';
        }
    }
    
    function deleteAndIncrease(trOne, trTwo, price) {
        trOne.remove();
        trTwo.remove();
        const currTotal = Number(totalPriceEl.textContent);
        const newTotal = currTotal + price;
        totalPriceEl.textContent = newTotal.toFixed(2);
    }
}
