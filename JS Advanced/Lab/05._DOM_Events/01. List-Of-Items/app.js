function addItem() {
    const inputElement = document.getElementById('newItemText');
    const text = inputElement.value;
    const newLi = document.createElement('li');
    newLi.textContent = text;
    document.getElementById('items').appendChild(newLi);
    inputElement.value = '';
}