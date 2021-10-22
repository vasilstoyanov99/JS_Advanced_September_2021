function solution() {
    document.querySelector('button')
        .addEventListener('click', addGift);
    const sectionsWithClassCard = document.getElementsByClassName('card');
    const listOfGifts = sectionsWithClassCard[1].querySelector('ul');
    listOfGifts.addEventListener('click', sendOrDiscardGift);
    const sentGifts = sectionsWithClassCard[2].querySelector('ul');
    const discardedGifts = sectionsWithClassCard[3].querySelector('ul');

    function addGift({target}) {
        const input = target.parentElement.querySelector('input');
        const newGift = input.value;

        const li = createStructure('li', 'gift', undefined,
            newGift,
            createStructure('button', undefined, 'sendButton', 'Send'),
            createStructure('button', undefined, 'discardButton', 'Discard')
        );

        listOfGifts.appendChild(li);

        const sorted = Array.from(listOfGifts.children)
            .sort((a, b) => {
                const giftA =  a.childNodes[0];
                const giftB =  b.childNodes[0];
                return giftA.textContent.localeCompare(giftB.textContent);
            });

        sorted.forEach(c => listOfGifts.appendChild(c));
        input.value = '';

        function createStructure(type, elClass, id, ...content) {
            const element = document.createElement(type);

            if (elClass !== undefined) {
                element.classList.add(elClass);
            }

            if (id !== undefined) {
                element.id = id;
            }

            for (let item of content) {
                if (typeof item === 'string') {
                    item = document.createTextNode(item);
                }

                element.appendChild(item);
            }

            return element;
        }
    }

    function sendOrDiscardGift({target}) {
        if (target.tagName === 'BUTTON') {
            if (target.textContent === 'Send') {
                const gift = target.parentElement;
                removeButtons(gift);
                sentGifts.appendChild(gift);
            } else if (target.textContent === 'Discard') {
                const gift = target.parentElement;
                removeButtons(gift);
                discardedGifts.appendChild(gift);
            }

            function removeButtons(gift) {
                for (let i = 0; i < 2; i++) {
                    gift.removeChild(gift.querySelector('button'));
                }
            }
        }
    }
}