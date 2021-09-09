function getElementsByIDs(elementArr){
  return elementArr.map((element)=> document.getElementById(element));
}

function formatText(text){
  return text.split('.')
}

function solve() {
  
  let [inputElement,outPutElement] = getElementsByIDs(['input','output']);

  let textArray = formatText(inputElement.innerText);

  while(textArray.length > 0){
    let currentParagraph = textArray.splice(0,3).join('.');
    let paragraphElemet = document.createElement('p');
    paragraphElemet.innerText = currentParagraph;
    outPutElement.appendChild(paragraphElemet);
  }

}

