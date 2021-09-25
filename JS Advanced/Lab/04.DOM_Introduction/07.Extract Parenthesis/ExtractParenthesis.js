function extract(id) {
    let text = document.getElementById(id).textContent;
    let regexWordSplit = new RegExp(/\([\w\s]+\)/, 'g');
    let words = regexWordSplit[Symbol.match](text);
    words = words.map(a => a.replace(/[()]/g, ''));

    return words.join('; ');
}