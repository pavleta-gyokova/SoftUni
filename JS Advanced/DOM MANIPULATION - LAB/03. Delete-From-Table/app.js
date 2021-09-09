function deleteByEmail() {
    let emails = document.querySelectorAll('#customers td:nth-of-type(2)');
    let resultElement = document.getElementById('result');
    let isDeleted = false
    let inputSearchText = document.querySelector('label input').value;
    console.log(emails);

    for(let customerElement of emails){
        if(customerElement.textContent === inputSearchText){
            customerElement.parentElement.remove();
            isDeleted = true
            resultElement.textContent = 'Deleted'
        }
    }
   if(!isDeleted){
    resultElement.textContent = 'Not Found.'
   }

    
}