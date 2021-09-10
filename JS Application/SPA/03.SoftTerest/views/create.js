import {createIdea} from '../src/data.js'

export function setupCreate(section,navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit',onSubmit);
    return showCreate;

    async function showCreate() {
        return section;
    }

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(form);
        const idea = {
            title : formData.get('title'),
            description : formData.get('description'),
            img : formData.get('imageURL')
        };
        if(idea.title.length < 6){
            return alert("Idea title must be atleast 6 characters long!")
        };
        if(idea.description.length < 10){
            return alert("Idea description must be atleast 6 characters long!")
        };
        if(idea.img.length < 5){
            return alert("Idea image URL  must be atleast 6 characters long!")
        };

        await createIdea(idea);
        navigation.goTo('dashboard');
    }
}