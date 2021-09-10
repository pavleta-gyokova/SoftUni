import { getIdeaById } from '../src/data.js';
import { deleteIdeaById } from '../src/data.js';
import { e } from '../src/dom.js';

function createIdeacard(idea, isOwner, goTo) {
    const result = document.createDocumentFragment();

    result.appendChild(e('img', { className: 'det-img', src: idea.img }));

    result.appendChild(
        e('div', { className: 'desc' },
            e('h2', { className: 'display-5' }, idea.title),
            e('p', { className: 'infoType' }, 'Description:'),
            e('p', { className: 'idea-description' }, idea.description)));

    if (isOwner) {
        console.log('here')
        result.appendChild(
            e('div', { className: 'text-center' },
                e('a', { className: 'btn detb', href: '', onClick: onDelete }, 'Delete'))
        );
    }



    return result;
    async function onDelete(event) {
        event.preventDefault();
        const confirmed = confirm("Are you sure you want to delete this idea?");
        if (confirmed) {
            await deleteIdeaById(idea._id);
            goTo('dashboard');
        }

    }
}

export function setupDetails(section, navigation) {
    return showDetails;

    async function showDetails(id) {
        section.innerHTML = '';
        const userId = sessionStorage.getItem('userId');

        const idea = await getIdeaById(id);
        const card = createIdeacard(idea, userId == idea._ownerId, navigation.goTo);
        section.appendChild(card);

        return section;
    }
}
