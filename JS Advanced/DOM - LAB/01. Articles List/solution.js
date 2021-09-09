function createArticle() {
	
	let input = document.getElementById('createTitle');
	let textArea = document.getElementById('createContent');
	let articles = document.getElementById('articles');

	let articleElemnt = document.createElement('article');
	let h3Element = document.createElement('h3');
	let pElemnt = document.createElement('p');

	if(input.value !== '' && textArea.value !== ''){
		h3Element.innerHTML = input.value;
		pElemnt.innerHTML = textArea.value;
	}

	articleElemnt.appendChild(h3Element);
	articleElemnt.appendChild(pElemnt);
	articles.appendChild(articleElemnt);
	
	input.value = '';
	textArea.value = '';

	

}