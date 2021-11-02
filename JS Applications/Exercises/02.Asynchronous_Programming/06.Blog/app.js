function attachEvents() {
    document.getElementById('btnLoadPosts')
        .addEventListener('click', loadPosts);
    document.getElementById('btnViewPost')
        .addEventListener('click', loadPostData);

    async function loadPosts() {
        const data = await fetchAndReturnData('http://localhost:3030/jsonstore/blog/posts');
        const postsSelect = document.getElementById('posts');

        for (let key in data) {
            const postData = data[key];
            const post =
                createStructure('option', 'value', postData.id, postData.title);
            postsSelect.appendChild(post);
        }
    }

    async function loadPostData() {
        const allPosts = document.querySelectorAll('option');
        const selectedPost = Array.from(allPosts).filter(p => p.selected === true)[0];
        const id = selectedPost.value;
        const [commentsData, postData] = await Promise.all([
            fetchAndReturnData('http://localhost:3030/jsonstore/blog/comments'),
            fetchAndReturnData (`http://localhost:3030/jsonstore/blog/posts/${id}`)
        ]);

        const selectedPostComments = [];

        for (let key in commentsData) {
            const commentData = commentsData[key];
            if (commentData.postId === id) {
                selectedPostComments.push({
                    id: commentData.id,
                    text: commentData.text
                });
            }
        }

        document.getElementById('post-title').textContent = postData.title;
        document.getElementById('post-body').textContent = postData.body;
        const commentsUl = document.getElementById('post-comments');
        commentsUl.replaceChildren();
        selectedPostComments.forEach(c => {
            const commentLi = createStructure('li', 'id', c.id, c.text);
            commentsUl.appendChild(commentLi);
        });
    }

    function createStructure(type, attribute, value, content) {
        const element = document.createElement(type);
        element[attribute] = value;
        element.textContent = content;

        return element;
    }

    async function fetchAndReturnData(url) {
        try {
            let response = await fetch(url);

            if (response.status !== 200) {
                throw new Error('Error');
            }
            return await response.json();

        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();