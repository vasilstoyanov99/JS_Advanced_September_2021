import { page, render } from './lib.js';
import { homePage } from "./views/home.js";
import { cataloguePage } from "./views/catalogue.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/api.js";
import { getUserData } from "./util.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { createPage } from "./views/create.js";

const root = document.getElementById('main-content');
document.getElementById('logoutBtn')
    .addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/games', cataloguePage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/create', createPage);

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
    const userDiv = document.getElementById('user');
    const guestDiv = document.getElementById('guest');

    if (userData) {
        guestDiv.style.display = 'none';
        userDiv.style.display = 'block';
    } else {
        userDiv.style.display = 'none';
        guestDiv.style.display = 'block';
    }
}