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

async function getAllMessages() {
    const messages = await requests('http://localhost:3030/jsonstore/messenger');
    const textarea = document.getElementById('messages');
    textarea.value = '';
    Object.values(messages).map(displayMessage).forEach(message => {
        textarea.value += message;
    });

}


function displayMessage(message) {
    return `${message.author}: ${message.content}\n`;
}

async function postNewMessage() {
    let name = document.querySelector('#controls > input[type=text]:nth-child(2)');
    let message = document.querySelector('#controls > input[type=text]:nth-child(5)');

    if(name.value != "" && message.value != ""){
        const result = await requests('http://localhost:3030/jsonstore/messenger',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify(
                {
                author : name.value,
                content : message.value
            }
            )
        });
    
        name.value = "";
        message.value = "";
        getAllMessages();
    }

    
}



function attachEvents() {
    getAllMessages();
    document.getElementById('submit').addEventListener('click',postNewMessage);
    document.getElementById('refresh').addEventListener('click', getAllMessages);
}

attachEvents();