function solve() {
  let unformatedText = document.getElementById('input');
  let sentences = unformatedText.innerText.split('.');
  let output = document.getElementById('output');
  
  while(sentences.length > 0){
    let currentParagraph = sentences.splice(0,3).join('.');
    let paragraphElemet = document.createElement('p');
    paragraphElemet.innerText = currentParagraph;
    output.appendChild(paragraphElemet);
  }

}