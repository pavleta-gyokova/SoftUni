import { getIdeas } from '../src/data.js';
import { e } from '../src/dom.js';


export function setupDashboard(section, navigation) {
    section.addEventListener('click', event =>{
        event.preventDefault();
        if(event.target.classList.contains('btn')){
            const ideaId = event.target.id;
            navigation.goTo('details', ideaId)
        }
    });
    return showDashboard;

    async function showDashboard() {
       
        section.innerHTML = '';
        const ideas = await getIdeas();
        if(ideas.length == 0){
            section.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
        } else {
            const cards = ideas.map(createIdeaPreview);
            cards.forEach(card => {
                section.appendChild(card);
            });
        }
        return section;
    }
}

function createIdeaPreview(idea) {
    const element = e('div', { className: 'card overflow-hidden current-card details' });
    element.style.width = '20rem';
    element.style.height = '18rem';
    element.innerHTML = ` 
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
     </div>
     <img class="card-image" src="${idea.img}" alt="Card image cap">
     <a id=${idea._id} class="btn" href="">Details</a>`;

     return element;

}
