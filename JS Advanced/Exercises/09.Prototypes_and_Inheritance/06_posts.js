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

const classes = solve();
/*let post = new classes.Post("Post", "Content");

console.log(post.toString());*/

// Post: Post
// Content: Content

/*let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());*/

console.log('-'.repeat(20));

let blogPost = new classes.BlogPost('BlogPost', 'BlogPost Content', 0);
blogPost.view().view().view();
console.log(blogPost.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

