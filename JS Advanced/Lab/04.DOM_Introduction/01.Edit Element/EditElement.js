function editElement(element, match, replacer) {

    let text = element.textContent;
    let regex = new RegExp(match, 'g');
    element.textContent = text.replace(regex, replacer);
}