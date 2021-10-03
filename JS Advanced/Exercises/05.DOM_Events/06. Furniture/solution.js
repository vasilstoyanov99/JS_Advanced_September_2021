function solve() {
    const [generateBtn, buyBtn] = document.querySelectorAll('button');
    generateBtn.addEventListener('click', addFurniture);
    buyBtn.addEventListener('click', getSelectedFurniture);

    function addFurniture({target}) {
        const inputData = JSON.parse(target.previousElementSibling.value);
        const tableElement = document.querySelector('tbody');

        for (let furniture of inputData) {
            let elements = [];
            elements.push(createCellElement('img', {src: furniture.img}));
            elements.push(createCellElement('p', {}, furniture['name']));
            elements.push(createCellElement('p', {}, furniture.price));
            elements.push(createCellElement('p', {}, furniture.decFactor));
            elements.push(createCellElement('input', {type: 'checkbox'}));

            const trElement = createTrElementAndAppendChildren(elements);
            tableElement.appendChild(trElement);
        }
        
        function createCellElement(nestedTag, properties, content) {
            const cell = document.createElement('td');
            const nestedElement = document.createElement(nestedTag);

            for (const property in properties) {
                nestedElement[property] = properties[property];
            }

            if (content){
                nestedElement.textContent = content;
            }

            cell.appendChild(nestedElement);
            return cell;
        }

        function createTrElementAndAppendChildren(children) {
            const trElement = document.createElement('tr');

            for (const child of children) {
                trElement.appendChild(child);
            }

            return trElement;
        }
    }

    function getSelectedFurniture(e) {
        const textarea = document.querySelectorAll('textarea')[1];
        textarea.value = '';
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (checkedBoxes.length > 0){
            const boughtFurniture = Array
                .from(checkedBoxes)
                .map(e => e.parentElement.parentElement)
                .map(e => ({
                    name: e.children[1].textContent,
                    price: Number(e.children[2].textContent),
                    decFactor: Number(e.children[3].textContent)
                }));
            const basket = {
                furniture: [],
                totalPrice: 0.00,
                totalDecFactor: 0.00
            };

            for (const furniture of boughtFurniture) {
                basket.furniture.push(furniture['name']);
                basket.totalPrice += furniture.price;
                basket.totalDecFactor += furniture.decFactor;
            }

            const result = `Bought furniture: ${basket.furniture.join(', ')}\n`
                + `Total price: ${basket.totalPrice.toFixed(2)}\n`
                + `Average decoration factor: ${basket.totalDecFactor / boughtFurniture.length}`;
            textarea.value = result;
        }
    }
}