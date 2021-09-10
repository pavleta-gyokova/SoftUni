import {login} from '../src/data.js';


export function setupLogin(section,navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);


    return showLogin;

    async function showLogin() {
        return section;
    }


    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password')
        await login(email,password);
        navigation.setUserNavigation();
        form.reset();
        navigation.goTo('home');
        
    
    }
}
