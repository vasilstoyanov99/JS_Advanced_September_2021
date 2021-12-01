import { page, render } from './lib.js';
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/api.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { addPage } from "./views/add.js";
import { myBooksPage } from "./views/mybooks.js";

const root = document.getElementById('site-content');
document.getElementById('logoutBtn')
    .addEventListener('click', onLogout);

page(decorateContext);
page('/', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/add', addPage);
page('/mybooks', myBooksPage);

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
        userDiv.querySelector('span')
            .textContent = `Welcome, ${userData.email}`;
    } else {
        userDiv.style.display = 'none';
        guestDiv.style.display = 'block';
    }
}