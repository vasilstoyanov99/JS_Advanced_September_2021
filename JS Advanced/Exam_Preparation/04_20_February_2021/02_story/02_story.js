class Story {
    constructor(titleInput, creatorInput) {
        this.title = titleInput;
        this.creator = creatorInput;
        this.comments = [];
        this._likes = [];
    }

    get likes() {
        let likesCount = this._likes.length;

        if (likesCount === 0) {
            return `${this.title} has 0 likes`;
        } else if (likesCount === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${--likesCount} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        } else if (this.creator === username) {
            throw new Error('You can\'t like your own story!');
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } else {
            this._likes = this._likes.filter(u => u !== username);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (id === undefined || this.comments[id - 1] === undefined) {
            const newComment = {
                id: this.comments.length + 1,
                username: username,
                content: content,
                replies: []
            };

            this.comments.push(newComment);

            return `${username} commented on ${this.title}`
        } else {
            const newReply = {
                id: id + ((this.comments[id - 1].replies.length + 1) / 10),
                username: username,
                content: content
            };

            this.comments[id - 1].replies.push(newReply);

            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        let sorting = {
            'asc': (a, b) => a.id - b.id,
            'desc': (a, b) => b.id - a.id,
            'username': (a, b) => a.username.localeCompare(b.username)
        }

        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`];

        this.comments.sort(sorting[sortingType]).forEach(c => {
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
            c.replies.sort(sorting[sortingType]).forEach(r => {
                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
            })
        });

        return result.join('\n');
    }
}
