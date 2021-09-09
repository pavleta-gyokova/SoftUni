function solve() {
    let taskNameElement = document.querySelector('#task');
    let taskDescriptionElemnt = document.querySelector('#description');
    let taskDateElement = document.querySelector('#date');
    let addBtn = document.querySelector('#add');
    let [addSection,openSection,inProgressSection,doneSection] = Array.from(document.querySelectorAll('section'));

    addBtn.addEventListener('click',(e)=> {
        e.preventDefault();
        let divElement = openSection.querySelectorAll('div')[1]
        let articleElememt = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = taskNameElement.value;
        articleElememt.appendChild(h3Element);

        let pDesElement = document.createElement('p');
        pDesElement.textContent = `Description: ${taskDescriptionElemnt.value}`;
        articleElememt.appendChild(pDesElement);

        let pDate = document.createElement('p');
        pDate.textContent = `Due date: ${taskDateElement.value}`;
        articleElememt.appendChild(pDate);

        divElement.appendChild(articleElememt);

       
    })

}