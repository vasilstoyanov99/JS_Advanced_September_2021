import { html } from '../lib.js';
import { register } from "../api/data.js";

const registerTemplate = (onRegister) => html`
    <section id="register-page" class="content auth">
        <form @submit="${onRegister}" id="register">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">

                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password">

                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password">

                <input class="btn submit" type="submit" value="Register">

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onRegister));

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const confirmPass = formData.get('confirm-password').trim();

        if (email === '' || password === '' || confirmPass === '') {
            return alert('All fields are required!');
        }

        if (password !== confirmPass) {
            return alert('Passwords don\'t match!');
        }

        await register(email, password);
        ctx.updateUserNav();
        ctx.page.redirect('/');
    }
}