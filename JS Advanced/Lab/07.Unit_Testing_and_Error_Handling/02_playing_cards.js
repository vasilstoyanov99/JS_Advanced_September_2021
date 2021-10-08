function createCard(inputFace, inputSuit) {
    const facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (!facesArr.includes(inputFace)){
        throw new Error('Invalid face!');
    }

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!Object.keys(suits).includes(inputSuit)){
        throw new Error('Invalid suit!');
    }

    const card = {
        suit: suits[inputSuit],
        face: inputFace,
        toString() {
            return `${inputFace}${this.suit}`;
        }
    }

    return card;
}
