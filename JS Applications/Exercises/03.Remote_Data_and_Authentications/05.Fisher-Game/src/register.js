window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData !== null) {
        window.location = './index.html';
    }

    document.getElementById('register')
        .addEventListener('submit', register);
});

async function register(ev) {
    ev.preventDefault();
    const form = ev.target;
    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const confirmPassword = formData.get('rePass');
    const url = 'http://localhost:3030/users/register';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, confirmPassword })
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