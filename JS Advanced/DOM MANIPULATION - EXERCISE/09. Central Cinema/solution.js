function solve() {

    const [name, hall, ticketPrice] = document.querySelectorAll('#container input');
    const movieOnScreenUL = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    movieOnScreenUL.innerHTML = '';
    archiveUl.innerHTML = '';

    const addButton = document.querySelector('#container button');
    addButton.addEventListener('click', addMovie);

    const clearButton = document.querySelector('#archive button');
    clearButton.addEventListener('click', clearMovies);

    function clearMovies() {
        archiveUl.innerHTML = '';
    }

    function addMovie(e) {
        e.preventDefault();

        if (name.value === '' || hall.value === '' || !Number(ticketPrice.value)) {
            return
        }
        let liElement = crateElement('li');
        let divElemnt = crateElement('div');
        
        let spanElement = createElWithTextContent('span', name.value);
        let strongelement = createElWithTextContent('strong', `Hall: ${hall.value}`);
        let stronElementPrice = createElWithTextContent('strong',Number(ticketPrice.value).toFixed(2));
        let archiveButtonElement = createElWithTextContent('button','Archive');

        let inputElement = createElementWithAttribute('input','placeholder', 'Tickets Sold');

        appendElements(divElemnt,[stronElementPrice,inputElement,archiveButtonElement]);
        appendElements(liElement,[spanElement,strongelement,divElemnt]);       
        appendElements(movieOnScreenUL,[liElement]);
        
        clearValues([name,hall,ticketPrice]);
    

        archiveButtonElement.addEventListener('click', archiveMovie);
    }
    function archiveMovie(e) {
        let li = e.target.parentNode.parentNode;
        let div = e.target.parentNode;
        let input = div.children[1];

        if (!Number(input.value)) {
            return
        }

        let spanElement = document.createElement('span');
        spanElement.textContent = li.children[0].textContent;

        let strong = document.createElement('strong');
        let priceofTheTicket = Number(div.children[0].textContent)
        strong.textContent = `Total amount: ${(priceofTheTicket * Number(input.value)).toFixed(2)}`;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        let newLi = document.createElement('li')

        newLi.appendChild(spanElement);
        newLi.appendChild(strong);
        newLi.appendChild(deleteButton);
        archiveUl.appendChild(newLi)

        deleteButton.addEventListener('click', (e) => {
            newLi.remove()
        })

        li.remove()

    }
    function createElWithTextContent(element, text) {
        const el = crateElement(element);
        el.textContent = text;
        return el
    }
    function crateElement(element) {
        return document.createElement(`${element}`);
    }
    function createElementWithAttribute(element,attribute,value){
        const el = crateElement(element);
        el.setAttribute(attribute,value);
        return el


    }
    function appendElements(parent,children){
        children.forEach(element => {
            parent.appendChild(element);
        });
    }
    function clearValues(elements){
        elements.forEach(element =>{
            element.value = '';
        })
    }

}