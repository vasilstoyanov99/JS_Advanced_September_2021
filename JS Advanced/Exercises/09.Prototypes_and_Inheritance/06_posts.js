function solve() {
    class Post {
        constructor(titleInput, contentInput) {
            this.title = titleInput;
            this.content = contentInput;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(titleInput, contentInput, likesInput, dislikesInput) {
            super(titleInput, contentInput);
            this.likes = likesInput;
            this.dislikes = dislikesInput;
            this.comments = [];
        }

        addComment(newComment) {
            this.comments.push(newComment);
        }

        toString() {
            let result = [super.toString(), `Rating: ${this.likes - this.dislikes}`];
            let commentsArr = [];
            if (this.comments.length > 0) {
                result.push('\nComments:\n');
                this.comments.forEach(c => {
                    commentsArr.push(` * ${c}`);
                })
            }

            result.push(commentsArr.join('\n'));

            return result.join('');
        }
    }

    class BlogPost extends Post{
        constructor(titleInput, contentInput, viewsInput) {
            super(titleInput, contentInput);
            this.views = viewsInput;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `Views: ${this.views}`;
        }
    }

    return {
        Post, SocialMediaPost, BlogPost
    };
}
