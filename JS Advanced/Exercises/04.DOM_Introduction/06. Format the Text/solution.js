function solve() {
    let text = document.getElementById('input').value;
    let sentencesArr = text.split('.')
        .filter(a => a !== '')
        .map(a => a + '.');

    let totalParagraphsRoof = Math.ceil(sentencesArr.length / 3);
    let outputElement = document.getElementById('output');

    for (let i = 0; i < totalParagraphsRoof; i++) {
        outputElement.innerHTML += `<p>${sentencesArr.splice(0, 3).join('')}</p>`;
    }
}