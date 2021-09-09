async function requests(url, options) {
    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

async function loadPhoneBook() {
    const phoneBook = await requests('http://localhost:3030/jsonstore/phonebook');
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';

    Object.values(phoneBook).map(loadEntry).forEach(li => {
        ul.appendChild(li);
    });

}

function loadEntry(phoneData) {
    const li = document.createElement('li');
    li.innerHTML = `${phoneData.person}: ${phoneData.phone} <button class="btnDelete">Delete</button>`;
    li.id = phoneData._id;
    return li;
}

async function postNewContact() {
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    if(phone.value !== '' && phone.person !== ""){
        const newContact = await requests('http://localhost:3030/jsonstore/phonebook',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify(
                {
                person : person.value,
                phone : phone.value
            }
            )
        });
    }
    loadPhoneBook();
}

async function deleteContact (id) {
    const request = await requests('http://localhost:3030/jsonstore/phonebook/' + id, {
        method : 'delete',
        headers: {'Content-Type' : 'application/json'}
    })
}

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadPhoneBook);
    document.getElementById('btnCreate').addEventListener('click',postNewContact);
    document.getElementById('phonebook').addEventListener('click',handleDeleteClick);
}

async function handleDeleteClick(event){

    if(event.target.className === 'btnDelete'){
        const id = event.target.parentNode.id;
        const confirmed  = confirm('Are you sure you want to delete this contact');
        if(confirmed){
            await deleteContact(id);
            loadPhoneBook();
        }
    }
    
}

attachEvents();