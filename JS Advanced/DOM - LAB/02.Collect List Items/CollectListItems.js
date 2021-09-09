function extractText() {
   let liElements = document.querySelectorAll('ul#items li')
   let resultAreaElemnt = document.querySelector('#result');
    for(let liEmelent of liElements ){
        resultAreaElemnt.value += liEmelent.textContent + '\n'
    }
  
}