/*function solve() {
    let text = document.getElementById('input').value;
    let sentencesArr = text.split('.')
        .filter(a => a)
        .map(a => a + '.');

    let totalParagraphsRoof = Math.ceil(sentencesArr.length / 3);
    let outputElement = document.getElementById('output');

    for (let i = 0; i < totalParagraphsRoof; i++) {
        outputElement.innerHTML += `<p>${sentencesArr.splice(0, 3).join('')}</p>`;
    }
}*/

function solve() {
    const text = document.getElementById('input').value;
    let textInArray = text.split('.');
    let paragraphsCount = 0;
    let paragraphs = [];
    let output = document.getElementById('output');

    for (sentance of textInArray) {
        if (sentance == '' || sentance.length < 1) {
            textInArray.pop(sentance);
        }
    }

    paragraphsCount = Math.ceil(textInArray.length / 3);

    for (let i = 1; i <= paragraphsCount; i++) {
        paragraphs.push(textInArray.splice(0, 3));
    }

    for (let i = 0; i < paragraphs.length; i++) {
        let pText = paragraphs[i].join('. ');
        output.innerHTML += `<p>${pText}\n</p>`;
    }
}