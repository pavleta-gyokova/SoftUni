// set up views
// setup nav links
// show nav user/guest
// start app in home view
import { setupHome } from '../views/home.js';
import { setupCreate } from '../views/create.js';
import { setupDashboard } from '../views/dashboard.js';
import { setupDetails } from '../views/details.js';
import { setupLogin } from '../views/login.js';
import { setupRegister } from '../views/register.js';
import { logout as apiLogout } from './data.js';


const main = document.querySelector('main');
const nav = document.querySelector('nav');

const views = {};
const links = {};

const navigation = {
    goTo,
    setUserNavigation
};

registerView('home', document.getElementById('home-page'), setupHome, 'home-link');
registerView('create', document.getElementById('create-page'), setupCreate, 'create-link');
registerView('dashboard', document.getElementById('dashboard-holder'), setupDashboard, 'dashboard-link');
registerView('details', document.getElementById('details-page'), setupDetails);
registerView('login', document.getElementById('login-page'), setupLogin, 'login-link');
registerView('register', document.getElementById('register-page'), setupRegister, 'register-link');
document.getElementById('views').remove();
setupNavigation();
document.getElementById('logoutBtn').addEventListener('click', logout);


// start application in home view
goTo('home')

function setupNavigation() {
    setUserNavigation();
    nav.addEventListener('click', (event) => {
        const viewName = links[event.target.id];
        if (viewName) {
            event.preventDefault();
            goTo(viewName);
        }
    })
}

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);
    views[name] = view;
    if (linkId) {
        links[linkId] = name;
    }
}


async function goTo(name, ...params) {
    main.innerHTML = '';
    const view = views[name];
    const section = await view(...params);
    main.appendChild(section);

}

function setUserNavigation() {
    const token = sessionStorage.getItem('userToken');
    if (token != null) {
        [...nav.querySelectorAll('.user-nav')].forEach(li => li.style.display = 'list-item');
        [...nav.querySelectorAll('.guest-nav')].forEach(li => li.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user-nav')].forEach(li => li.style.display = 'none');
        [...nav.querySelectorAll('.guest-nav')].forEach(li => li.style.display = 'list-item');
    }
}

async function logout() {
    try {
        await apiLogout();
        setUserNavigation();
        goTo('home');
    } catch (err) {
        alert(err.message);
    }
}
