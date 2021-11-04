window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData !== null) {
        document.querySelector('.email span').textContent = userData.email;
        document.getElementById('guest').style.display = 'none';
        const addBtn = document.querySelector('.add');
        addBtn.disabled = false;
        addBtn.addEventListener('click',
            addCatch.bind(null, userData.token, userData.id));
    } else {
        document.getElementById('home').style.display = 'none';
        const logout = document.getElementById('logout');
        logout.style.display = 'none';
        logout.disabled = true;
    }

    document.querySelector('.load')
        .addEventListener('click', loadData);
    loadData();
});

async function loadData() {
    const data = await request('http://localhost:3030/data/catches');
    document.getElementById('catches')
        .replaceChildren(...data.map(d => createPreview(d)));
}

function createPreview(data) {
    const catchId = data._id;
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData === null ? null : userData.id;
    const token = userData === null ? null : userData.token;
    const isDisabled = userId !== data._ownerId;
    const updateBtn = createStructure('button', 'update', null, null, catchId, isDisabled, 'Update');
    updateBtn.addEventListener('click', updateCatch.bind(null, token, userId));
    const deleteBtn = createStructure('button', 'delete', null, null, catchId, isDisabled, 'Delete');
    deleteBtn.addEventListener('click', deleteCatch.bind(null, token));
    const div = createStructure('div', 'catch', null, null, null, null,
        createStructure('label', null, null, null, null, null, 'Angler'),
        createStructure('input', 'angler', 'text', data.angler, null, null),
        createStructure('label', null, null, null, null, null, 'Weight'),
        createStructure('input', 'weight', 'text', data.weight, null, null),
        createStructure('label', null, null, null, null, null, 'Species'),
        createStructure('input', 'species', 'text', data.species, null, null),
        createStructure('label', null, null, null, null, null, 'Location'),
        createStructure('input', 'location', 'text', data.location, null, null),
        createStructure('label', null, null, null, null, null, 'Bait'),
        createStructure('input', 'bait', 'text', data.bait, null, null),
        createStructure('label', null, null, null, null, null, 'Capture Time'),
        createStructure('input', 'captureTime', 'number', data.captureTime, null, null),
        updateBtn,
        deleteBtn
        );

    return div;
}

function createStructure(tag, elementClass, type, value, id, isDisabled,  ...content) {
    const element = document.createElement(tag);

    if (type !== null) {
        element.type = type;
        element.value = value;
    }

    if (elementClass !== null) {
        element.classList.add(elementClass);
    }

    if (id !== null) {
        element.dataset.id = id;

        if (isDisabled === true) {
            element.disabled = true
        }
    }

    for (let item of content) {
        if (typeof item === 'string') {
            item = document.createTextNode(item);
        }

        element.appendChild(item);
    }

    return element;
}

async function addCatch(token, userId, ev) {
    ev.preventDefault();
    const form = ev.target.parentElement.parentElement;
    const formData = new FormData(form);
    const body = createCatchBody(userId, formData.get('angler'), Number(formData.get('weight')),
        formData.get('species'), formData.get('location'), formData.get('bait'),
        formData.get('captureTime'));
    const url = 'http://localhost:3030/data/catches';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(body)
    };
    const response = await request(url, options);
    alert('Catch created successfully!');
    Object.assign(body, { _id: response._id} );
    document.getElementById('catches')
        .appendChild(createPreview(body));
}

async function updateCatch(token, userId, {target}) {
    const div = target.parentElement;
    const inputs = Array.from(div.querySelectorAll('input'));
    const inputsValues = inputs.map(i => i.value);
    const body = createCatchBody(userId, ...inputsValues);
    const url = `http://localhost:3030/data/catches/${target.dataset.id}`;
    const options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(body)
    };

    await request(url, options);
    alert('Catch updated successfully!');
}

async function deleteCatch(token, {target}) {
    const url = `http://localhost:3030/data/catches/${target.dataset.id}`;
    const options = {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    };
    await request(url, options);
    target.parentElement.remove();
}

function createCatchBody(ownerId, angler, weight, species, location, bait, captureTime) {
    return {
        _ownerId: ownerId,
        angler: angler,
        weight: Number(weight),
        species: species,
        location: location,
        bait: bait,
        captureTime: Number(captureTime)
    }
}

async function request(url, options) {
    const response = await fetch(url, options);

    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    return await response.json();
}