import { html, render } from '../node_modules/lit-html/lit-html.js';

const modalTemplate = (msg, onChoice) => html`
<div id="modal">
    <p>${msg}</p>
    <button id="okbtn" @click=${()=>onChoice(true)}>OK</button>
    <button id="cancelbtn" @click=${()=>onChoice(false)}>Cancel</button>
</div>`;

const overlay = document.createElement('div');
overlay.id = 'overlay';

export function createModal(msg, callback) {
    render(modalTemplate(msg, onChoice), overlay);
    document.body.appendChild(overlay);
    function onChoice(choice) {
        clearModal();
        callback(choice);
    }
}

function clearModal() {
    overlay.remove();
}