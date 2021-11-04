document.getElementById('loadBooks')
    .addEventListener('click', loadAllBooks);

const tbody = document.querySelector('tbody');
tbody.addEventListener('click', deleteOrChangeFormTitle);
const form = document.querySelector('form');
form.addEventListener('submit', createOrUpdate);
const formTitle = form.querySelector('h3');

async function loadAllBooks() {
    const books = await fetchBooks();
    tbody.replaceChildren();
    for (let key in books) {
        const book = books[key];
        const bookTr = createStructure('tr', undefined,
            createStructure('td', undefined, book.title),
            createStructure('td', undefined, book.author),
            createStructure('td', undefined,
                createStructure('button', key, 'Edit'),
                createStructure('button', key, 'Delete')
            )
        );
        tbody.appendChild(bookTr);
    }
}

async function deleteOrChangeFormTitle(ev) {
    if (ev.target.tagName === 'BUTTON') {
        const button = ev.target;
        const bookid = button.dataset.bookid;
        if (button.textContent === 'Edit') {
            formTitle.textContent = 'Edit FORM';
            const book = await getBookBy(bookid);
            form.querySelector('[name="title"]').value = book.title;
            form.querySelector('[name="author"]').value = book.author;
            form.dataset.bookid = bookid;
        } else if (button.textContent === 'Delete') {
            await deleteBook(bookid);
        }
    }
}

async function createOrUpdate(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const title = formData.get('title');
    const author = formData.get('author');

    if (title === '' || author === '') {
        alert('Error! Invalid data!');
        throw new Error('Error! Invalid data!');
    }

    const book = { author, title };
    form.reset();

    if (formTitle.textContent === 'Edit FORM') {
        await updateBook(book, form.dataset.bookid);
    } else if (formTitle.textContent === 'FORM') {
        await createBook(book);
    }
}

async function updateBook(book, id) {
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const options = {
        method: 'put',
        body: JSON.stringify(book)
    };
    await request(url, options);
    formTitle.textContent = 'FORM';
    await loadAllBooks();
}

async function createBook(book) {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    };
    await request(url, options);
    await loadAllBooks();
}

async function fetchBooks() {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const data = await request(url);

    return data;
}

async function deleteBook(bookid) {
    const url = `http://localhost:3030/jsonstore/collections/books/${bookid}`;
    await request(url, {
        method: 'delete'
    });
    await loadAllBooks();
}

async function getBookBy(id) {
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const book = await request(url);

    return book;
}

function createStructure(type, bookid, ...content) {
    const element = document.createElement(type);

    if (bookid !== undefined) {
        element.dataset.bookid = bookid;
    }

    for (let item of content) {
        if (typeof item === 'string') {
            item = document.createTextNode(item);
        }

        element.appendChild(item);
    }

    return element;
}

async function request(url, options) {
    if (options && options.body !== undefined) {
        Object.assign(options, {
            'Content-Type': 'application/json'
        });
    }

    try {
        const response = await fetch(url, options);

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        alert(error.message);
    }
}