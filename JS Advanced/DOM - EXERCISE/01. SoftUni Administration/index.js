function solve() {
    let addButton = document.querySelector('.form-control button');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let taskNameElement = document.querySelectorAll('.form-control input')[0];
        let taskDateElement = document.querySelectorAll('.form-control input')[1];
        let selectField = document.querySelector('.form-control select');
        checkForValidInputs(taskNameElement);
        checkForValidInputs(taskDateElement);
        if (selectField.selectedIndex == "0") {
            return
        }

        let trainigModules = document.querySelector('.modules');
        let divElement = createElement('div');
        addClassList(divElement,'module')
        appendElements(trainigModules,divElement);

        let h3Element = createElement('h3');
        h3Element.innerText = (selectField.value).toUpperCase();
        appendElements(divElement,h3Element);

        let ulElement =  createElement('ul');
        appendElements(divElement,ulElement);

        let liElement = createElement('li');
        addClassList(liElement,'flex')
        appendElements(ulElement,liElement);

        let h4Element = createElement('h4');
        let [date,time] = (taskDateElement.value).split('T');
        let newdate = date.split('-').join('/');
        let dateTime = newdate + ' - ' + time;
        h4Element.innerText = `${taskNameElement.value} - ${dateTime}`;
        appendElements(liElement,h4Element);

        let deleteButton = createElement('button');
        deleteButton.innerText = 'Del';
        addClassList(deleteButton,'red');
        appendElements(liElement,deleteButton);

        clearValues(taskNameElement);
        clearValues(taskDateElement);
        console.log(selectField.firstElementChild);
        selectField.firstElementChild.setAttribute('selected',true);

        deleteButton.addEventListener('click',()=>{
            liElement.remove();

        })

       





    })

    function checkForValidInputs(element) {

        if (element.value == '') {
            return;

        }
    }

    function createElement(element) {
        return document.createElement(`${element}`);
    }
    function appendElements(parent,children){
        
            parent.appendChild(children);
    
    }
    function addClassList(element, classList) {
        return element.classList.add(classList);
    }

    function clearValues(element){
            element.value = '';
        
    }
}