function solution() {
    
}


async function getArticles() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();
    data.map(createArticle).forEach(element => main.appendChild(element));

}

function createArticle (article) {
    const resultArticle = e('div',{className: 'accordion'},
    e('div', {className : 'head'},
    e('span',{},article.title),
    e('button',{className : 'button', id: article._id},"More")));
    resultArticle.addEventListener('click', () =>{
        showArticleDetails(article._id,resultArticle)
    });
        
    return resultArticle;
}

async function showArticleDetails(articleId, preview) {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + articleId;
    const response = await fetch(url);
    const data = await response.json();

    const result = e('div',{className: 'accordion'},
    e('div', {className : 'head'},
    e('span',{},data.title),
    e('button',{className : 'button', onClick:toggleCard, id: articleId},"Less")),
    e('div',{},
    e('p',{},data.content)));
    
    preview.replaceWith(result);;
    
    function toggleCard (){

        result.replaceWith(preview);
    }
    

}

window.addEventListener('load', () => {
    getArticles();
})


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}