function getElementsByIDs(elementArr){
	return elementArr.map((element)=> document.getElementById(element) )
}
function createElements(elementsArr) {
	return elementsArr.map((element) => document.createElement(element))
}

function setTextContentToElement(element, content) {
	return element.innerText = content
}

function appendElementToParent(parentElement, child) {
	return parentElement.appendChild(child);
}

function removeValueFromElement(element) {
	return element.value = '';
}


function createArticle() {

	let [title,content,articlesListElement] = getElementsByIDs(['createTitle','createContent','articles'])
	
	if (title.value === '' || content.value === '') {
		return
	}

	let [h3Element, articleElement, pElement] = createElements(['h3', 'article', 'p']);

	setTextContentToElement(h3Element, title.value);
	setTextContentToElement(pElement, content.value);

	appendElementToParent(articleElement, h3Element);
	appendElementToParent(articleElement, pElement);
	appendElementToParent(articlesListElement, articleElement);

	removeValueFromElement(title);
	removeValueFromElement(content);
}