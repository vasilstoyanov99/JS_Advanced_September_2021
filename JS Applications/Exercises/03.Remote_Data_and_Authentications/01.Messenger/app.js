function attachEvents() {
    document.getElementById('refresh')
        .addEventListener('click', refreshMessages);
    document.getElementById('submit')
        .addEventListener('click', createMessage);
}
attachEvents();

const messagesTextArea = document.getElementById('messages');
const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');
const url = 'http://localhost:3030/jsonstore/messenger';

async function refreshMessages() {
    try {
        const messages = await fetchMessages();
        messagesTextArea.value = messages.map(m => `${m.author}: ${m.content}`).join('\n');
    } catch (error) {
        alert(error.message);
    }

}

async function createMessage() {
    const author = authorInput.value;
    const content = contentInput.value;
    const message = { author, content };
    try {
        await postMessage(message);
        messagesTextArea.value += `\n${author}: ${content}`;
        contentInput.value = '';
    } catch (error) {
        alert(error.message);
    }

}

async function fetchMessages() {
    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error('Something went wrong!');
    }

    const data = await response.json();

    return Object.values(data);
}

async function postMessage(message) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };

    const response = await fetch(url, options);

    if (response.status !== 200) {
        throw new Error('Something went wrong!');
    }

    await response.json();
}