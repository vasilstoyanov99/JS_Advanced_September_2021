import { page, render } from './lib.js';
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./api/api.js";
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { createPage } from "./views/create.js";
import { searchPage } from "./views/search.js";

const root = document.getElementById('main-content');
document.getElementById('logoutBtn')
    .addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/create', createPage);
page('/search', searchPage);

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
    const userNavElements = Array.from(document.querySelectorAll('.userNav'));
    const guestNavElements = Array.from(document.querySelectorAll('.guestNav'));

    if (userData) {
        show(userNavElements);
        hide(guestNavElements);
    } else {
        show(guestNavElements);
        hide(userNavElements);
    }

    function hide(elements) {
        elements.forEach(e => e.style.display = 'none');
    }

    function show(elements) {
        elements.forEach(e => e.style.display = 'inline');
    }
}