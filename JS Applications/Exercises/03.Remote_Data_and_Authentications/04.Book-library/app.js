document.getElementById('loadBooks')
    .addEventListener('click', loadAllBooks);

const tbody = document.querySelector('tbody');
tbody.addEventListener('click', deleteOrChangeFormTitle);
const form = document.querySelector('form');
form.addEventListener('submit', createOrUpdate);
const formTitle = form.querySelector('h3');

async function loadAllBooks() {
    try {
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

    } catch (error) {
        alert(error.message);
    }
}

async function deleteOrChangeFormTitle(ev) {
    if (ev.target.tagName === 'BUTTON') {
        try {
            const button = ev.target;
            if (button.textContent === 'Edit') {
                formTitle.textContent = 'Edit FORM'
                form.dataset.bookid = button.dataset.bookid;
            } else if (button.textContent === 'Delete') {
                await deleteBook(button.dataset.bookid);
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

async function createOrUpdate(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const title = formData.get('title');
    const author = formData.get('author');

    try {
        if (title === '' || author === '') {
            throw new Error('Error! Invalid data!');
        }

        const book = { author, title };
        form.reset();

        if (formTitle.textContent === 'Edit FORM') {
            await updateBook(book, form.dataset.bookid);
        } else if (formTitle.textContent === 'FORM') {
            await createBook(book);
        }
    } catch (error) {
        alert(error.message);
    }
}

async function updateBook(book, id) {
    const options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    };
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const response = await fetch(url, options);

    if (response.ok !== true) {
        throw new Error('Error! The book was not updated successfully!')
    }

    formTitle.textContent = 'FORM';
    await response.json();
    await loadAllBooks();
}

async function createBook(book) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    };
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const response = await fetch(url, options);

    if (response.ok !== true) {
        throw new Error('Error! The Book was not created successfully!')
    }

    await response.json();
    await loadAllBooks();
}

async function fetchBooks() {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const response = await fetch(url);

    if (response.ok !== true) {
        throw new Error('Error! Data was not fetched successfully!');
    }

    return await response.json();
}

async function deleteBook(bookid) {
    const url = `http://localhost:3030/jsonstore/collections/books/${bookid}`;
    const response = await fetch(url, {
        method: 'delete'
    });

    if (response.ok !== true) {
        throw new Error('Error! The book was not deleted successfully!');
    }

    await response.json();
    await loadAllBooks();
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