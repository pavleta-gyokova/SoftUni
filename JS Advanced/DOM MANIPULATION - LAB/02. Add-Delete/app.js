function addItem() {
    let newTextElement = document.getElementById('newText');
    let parentElement = document.getElementById('items');

    if(newTextElement !== ''){
        let liElement = document.createElement('li');
        liElement.textContent = newTextElement.value;
        let deleteElement = document.createElement('a');
        let linkText = document.createTextNode('[Delete]');
        deleteElement.appendChild(linkText);
        deleteElement.href = '#';
        liElement.appendChild(deleteElement);
        parentElement.appendChild(liElement);
        newTextElement.value = '';
        deleteElement.addEventListener('click', function deleteItems(e){
            let parentElement = e.currentTarget.parentElement;
            parentElement.remove()
        });
    }
}

    