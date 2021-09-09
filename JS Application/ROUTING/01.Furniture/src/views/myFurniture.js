import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyFurniture } from '../api/data.js';
import { until } from '../../node_modules/lit-html/directives/until.js';

const myPageTemplate = (data) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${data.map(furnitureTemplate)}
</div>
`;

const furnitureTemplate = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${item.img} />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

const loaderTemplate = html`<div class="lds-dual-ring"></div>`


export async function myFurniturePage(ctx) {
    
    ctx.render(until(populateTemplate(),loaderTemplate));

    async function populateTemplate(){
        const data = await getMyFurniture();
        return myPageTemplate(data)
    }
}