import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getFurnitures } from '../api/data.js';

const dashboardTemplate = (data, search, onSearch) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
        <div style="float:right">
            <input name="search" type="text" id="searchInput" .value=${search == undefined ? '' : search}>
            <button @click=${onSearch}>Search</button>
        </div>
    </div>
</div>
<div class="row space-top">
    ${data.map(furnitureTemplate)}
</div>`;


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

export async function dashboardPage(ctx) {
    const searchParam = ctx.querystring.split('=')[1];
    ctx.render(until(populateTemplate(), loaderTemplate));

    function onSearch(event) {
        const search = encodeURIComponent(document.getElementById('searchInput').value);
        ctx.page.redirect('/?search=' + search);
    }
    async function populateTemplate() {
        const data = await getFurnitures(searchParam);
        return dashboardTemplate(data, searchParam, onSearch);
    }
}

