function attachEvents() {
    document.getElementById('btnLoad')
        .addEventListener('click', loadContacts);
    document.getElementById('btnCreate')
        .addEventListener('click', createContact);
}

attachEvents();

const phonebookUl = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

async function loadContacts() {
    try {
        const contacts = await fetchContacts();
        phonebookUl.replaceChildren();
        contacts.forEach(c => createAndAppendLi(c));
    } catch (error) {
        alert(error.message)
    }
}

function createAndAppendLi(contact) {
    const li = document.createElement('li');
    li.textContent = `${contact.person}: ${contact.phone}`;
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', deleteContact.bind(null, contact._id));
    li.appendChild(button);
    phonebookUl.appendChild(li);
}

async function fetchContacts() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');

    if (response.status !== 200) {
        throw new Error('Something went wrong!');
    }

    const data = await response.json();

    return Object.values(data);
}

async function deleteContact(id, {target}) {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`,
            {
            method: 'delete'
        });

        if (response.status !== 200) {
            throw new Error('Error! The contact was not deleted successfully!');
        }

        await response.json();
        const contact = target.parentElement;
        contact.remove();
    } catch (error) {
        alert(error.message)
    }
}

async function createContact() {
    const person = personInput.value;
    const phone = phoneInput.value;
    personInput.value = '';
    phoneInput.value = '';
    const contact = { person, phone };

    try {
        await postNewContact(contact);
        await loadContacts();
    } catch (error) {
        alert(error.message)
    }
}

async function postNewContact(contact) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    };

    const response = await fetch('http://localhost:3030/jsonstore/phonebook', options);

    if (response.status !== 200) {
        throw new Error('Error! The contact was not created successfully!');
    }

    await response.json();
}