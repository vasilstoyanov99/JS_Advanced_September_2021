window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submit);
  const infoPreview = document.getElementById('infoPreview');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  function submit(ev) {
    ev.preventDefault();
    const parent = ev.target.parentElement;
    const inputs = Array.from(parent.querySelectorAll('input'))
        .filter(i => i.type !== 'button');

    const fullNameInput = inputs[0].value;
    const emailInput = inputs[1].value;

    if (fullNameInput !== '' && emailInput !== '') {
      const phoneNumberInput = inputs[2].value;
      const addressInput = inputs[3].value;
      const postalCodeInput = inputs[4].value;

      createAndAppend(`Full Name: ${fullNameInput}`, infoPreview);
      createAndAppend(`Email: ${emailInput}`, infoPreview);
      createAndAppend(`Phone Number: ${phoneNumberInput}`, infoPreview);
      createAndAppend(`Address: ${addressInput}`, infoPreview);
      createAndAppend(`Postal Code: ${postalCodeInput}`, infoPreview);

      submitBtn.disabled = true;
      inputs.forEach(i => i.value = '');
      setDisabledOrNot(false, editBtn, continueBtn);
      editBtn.addEventListener('click', edit.bind(null, [fullNameInput, emailInput, phoneNumberInput, addressInput, postalCodeInput, inputs]));
      continueBtn.addEventListener('click', deleteAndAddMessage);
    }
  }

  function edit(data) {
    const inputs = data.pop();

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = data[i];
    }

    const infoPreviewChildren = Array.from(infoPreview.children);
    removeElements(infoPreviewChildren);
    setDisabledOrNot(false, submitBtn);
    setDisabledOrNot(true, editBtn, continueBtn);
  }

  function setDisabledOrNot(bool, ...buttons) {
    buttons.forEach(b => b.disabled = bool);
  }

  function deleteAndAddMessage() {
    const div = document.getElementById('block');
    const children = Array.from(div.children);
    removeElements(children);
    createAndAppend('Thank you for your reservation!', div, 'h3');
  }

  function removeElements(elements) {
    elements.forEach(e => e.remove());
  }

  function createAndAppend(content, parent, type = 'li') {
    const element = document.createElement(type);
    element.textContent = content;
    parent.appendChild(element);
  }
}
