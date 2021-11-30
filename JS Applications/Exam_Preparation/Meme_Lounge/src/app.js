import { page, render } from './lib.js';
import { getUserData } from "./util.js";
import { logout } from "./api/data.js";
import { homePage } from "./views/home.js";
import {catalogPage} from "./views/catalog.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { profilePage } from "./views/profile.js";

const root = document.querySelector('main');
document.getElementById('logoutBtn')
    .addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/memes', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/profile', profilePage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}

function updateUserNav() {
    const userData = getUserData();
    const userDiv = document.querySelector('.user');
    const guestDiv = document.querySelector('.guest');

    if (userData) {
        guestDiv.style.display = 'none';
        userDiv.style.display = 'block';
        document.querySelector('.user span')
            .textContent = `Welcome, ${userData.email}`;
    } else {
        userDiv.style.display = 'none';
        guestDiv.style.display = 'block';
    }
}