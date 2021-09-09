function toggle() {
    let textToShowElement = document.getElementById('extra');
    let buttonElement = document.querySelector('.button');
    if(textToShowElement.style.display === 'none'){
        textToShowElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        textToShowElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
    
   
}