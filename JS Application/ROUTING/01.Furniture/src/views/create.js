import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';
import { notify, clear } from '../notification.js'

const createTemplate = (onSubmit, errorMsg) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    ${errorMsg ? html`<p style="color:red">${errorMsg}</p>` : ''}
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>
`


export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        [...event.target.querySelector('input')].forEach(input => input.disabled = true);
        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
        if (Object.entries(data).filter(([k, v]) => k != 'material').some(([k, v]) => v == '')) {
            return ctx.render(createTemplate(onSubmit, 'Please fill all mandatory fields!'))
        }
        // if (data.make.length < 4 || data.model.length < 4) {
        //     return ctx.render(createTemplate(onSubmit,'Make must be at least 4 symbols!'))
        // }
        // if (data.model.length < 4) {
        //     return ctx.render(createTemplate(onSubmit,'Model must be at least 4 symbols!'));
        // }

        // if (data.year < 1950 || data.year > 2050) {
        //     return ctx.render(createTemplate(onSubmit,'Year must be between 1950 and 2050!'));

        // }

        // if (data.description.length <= 10) {
        //     return ctx.render(createTemplate(onSubmit,'Description must be more than 10 symbols!'));
        // }
        // if (Math.sign(Number(data.price)) != 1) {
        //     return ctx.render(createTemplate(onSubmit,'Price must be a positive number!'));
        // }

        // if (!data.img) {
        //     return ctx.render(createTemplate(onSubmit,'Image URL is required!'));
        // }
        await createItem(data);
        clear()
        ctx.page.redirect('/');

    }
}