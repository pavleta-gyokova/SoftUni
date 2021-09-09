import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem, getItemById } from '../api/data.js';
import { createModal } from '../modal.js'

const detailsTemplate = (item, isOwner, onDelete) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${item.make}</span></p>
        <p>Model: <span>${item.model}</span></p>
        <p>Year: <span>${item.year}</span></p>
        <p>Description: <span>${item.description}</span></p>
        <p>Price: <span>${item.price}</span></p>
        <p>Material: <span>${item.material}</span></p>
        ${isOwner ? html`
        <div>
            <a href=${`/edit/${item._id}`} class="btn btn-info">Edit</a>
            <a href="javascript:void(0)" class="btn btn-red" @click=${onDelete}>Delete</a>
        </div>` : ''}
    </div>
</div>
`


export async function detailsPage(ctx) {
    const itemId = ctx.params.id;
    const item = await getItemById(itemId);
    const userId = sessionStorage.getItem('userId');
    ctx.render(detailsTemplate(item, item._ownerId == userId, onDelete));

    async function onDelete() {
        createModal('Are you sure you want to delete this item?', onChoice);
        async function onChoice(confirmed) {
            if (confirmed) {
                await (deleteItem(item._id));
                ctx.page.redirect('/');
            }
        }
    }
}