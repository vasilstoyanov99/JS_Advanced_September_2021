window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData !== null) {
        window.location = './index.html';
    }

    document.getElementById('loginForm')
        .addEventListener('submit', login);
});

async function login(ev) {
    console.log(ev.target);
    ev.preventDefault();
    const form = ev.target;
    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const url = 'http://localhost:3030/users/login';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({ email, password })
    }

    try {
        const response = await fetch(url, options);

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        const userData = {
            id: data._id,
            email: data.email,
            token: data.accessToken
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html';
    } catch (error) {
        alert(error.message);
    }
}