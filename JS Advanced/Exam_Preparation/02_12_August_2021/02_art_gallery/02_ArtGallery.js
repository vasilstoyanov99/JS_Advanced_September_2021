class ArtGallery {
    constructor(creatorInput) {
        this.creator = creatorInput;
        this.possibleArticles = { "picture" : 200, "photo" : 50, "item" : 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModelInput, articleNameInput, quantityInput) {
        articleModelInput = articleModelInput.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModelInput)) {
            throw new Error('This article model is not included in this gallery!');
        }

        const existingRecord = this.listOfArticles.find(a => a['articleModel'] === articleModelInput
            && a['articleName'] === articleNameInput);

        if (existingRecord) {
            existingRecord['quantity'] += quantityInput;
        } else {
            this.listOfArticles.push({
                articleModel: articleModelInput,
                articleName: articleNameInput,
                quantity: quantityInput
            });
        }

        return `Successfully added article ${articleNameInput} with a new quantity- ${quantityInput}.`;
    }

    inviteGuest (guestNameInput, personalityInput) {
        const guest = this.guests.find(g => g['guestName'] === guestNameInput);

        if (guest !== undefined) {
            throw new Error(`${guestNameInput} has already been invited.`);
        }

        let points = 0;

        if (personalityInput === 'Vip') {
            points = 500;
        } else if (personalityInput === 'Middle') {
            points = 250;
        } else {
            points = 50
        }

        this.guests.push({
            guestName: guestNameInput,
            points: points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestNameInput}!`;
    }

    buyArticle (articleModelInput, articleNameInput, guestNameInput) {
        articleModelInput = articleModelInput.toLowerCase();
        const existingRecord = this.listOfArticles.find(a =>
            a['articleModel'] === articleModelInput &&
            a['articleName'] === articleNameInput);

        if (!this.possibleArticles.hasOwnProperty(articleModelInput)
            || existingRecord === undefined) {
            throw new Error('This article is not found.');
        } else if (existingRecord['quantity'] === 0) {
            return `The ${articleNameInput} is not available.`;
        }

        const guest = this.guests.find(g => g['guestName'] === guestNameInput);

        if (guest === undefined) {
            throw new Error('This guest is not invited.');
        }

        const neededPoints = this.possibleArticles[articleModelInput];

        if (neededPoints > guest['points']) {
            return `You need to more points to purchase the article.`;
        }

        guest['points'] -= neededPoints;
        existingRecord['quantity']--;
        guest['purchaseArticle']++;

        return `${guestNameInput} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo (criteria) {
        const result = [];

        if (criteria === 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(a => {
                result.push(`${a['articleModel']} - ${a['articleName']} - ${a['quantity']}`);
            });
        } else if (criteria === 'guest') {
            result.push('Guests information:');
            this.guests.forEach(g => {
                result.push(`${g['guestName']} - ${g['purchaseArticle']}`);
            });
        }

        return result.join('\n');
    }
}

let art = new ArtGallery("Curtis Mayfield");

art.addArticle('picture', 'Mona Liza', 3);
art.addArticle('Item', 'Ancient vase', 2);
art.addArticle('picture', 'Mona Liza', 1);

art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

art.buyArticle('picture', 'Mona Liza', 'John')
art.buyArticle('item', 'Ancient vase', 'Peter')
art.buyArticle('item', 'Mona Liza', 'John')

