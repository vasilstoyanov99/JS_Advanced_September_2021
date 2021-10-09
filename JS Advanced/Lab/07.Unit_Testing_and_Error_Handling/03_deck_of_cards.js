function printDeckOfCards(cards) {
    try {
        let result = [];

        for (const card of cards) {
            const face = card.slice(0, card.length - 1);
            const suit = card.charAt(card.length - 1);
            result.push(createCard(face, suit));
        }

        console.log(result.join(' '));

    } catch (error) {
        console.log(error.message);
    }

    function createCard (inputFace, inputSuit){
        const facesArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const inputCard = `${inputFace}${inputSuit}`;

        if (!facesArr.includes(inputFace)){
            throw new Error(`Invalid card: ${inputCard}`);
        }

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!Object.keys(suits).includes(inputSuit)){
            throw new Error(`Invalid card: ${inputCard}`);
        }

        return `${inputFace}${suits[inputSuit]}`;
    }
}