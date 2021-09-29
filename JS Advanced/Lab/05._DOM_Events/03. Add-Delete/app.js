function addItem() {
    const inputElement = document.getElementById('newItemText');
    const text = inputElement.value;
    const newLi = document.createElement('li');
    newLi.textContent = text;

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    deleteButton.addEventListener('click', removeElement);
    newLi.appendChild(deleteButton);
    document.getElementById('items').appendChild(newLi);

    inputElement.value = '';

    function removeElement(ev) {
        ev.target.parentElement.remove();
    }
}