function addItem() {
    let newTextElement = document.getElementById('newItemText');
    let parentElement = document.getElementById('items');

    if(newTextElement !== ''){
        let liElement = document.createElement('li');
        liElement.textContent = newTextElement.value;
        parentElement.appendChild(liElement);
        newTextElement.value = '';
    }

}