function solve() {

  let linkElements = document.querySelectorAll('.link-1 a');

  for(const linkEmelent of linkElements){
    linkEmelent.addEventListener('click', onLinkElementClick);
  }
  
  function onLinkElementClick(e){
    let paragraph = e.currentTarget.nextElementSibling;
    let visitedCount = Number(paragraph.innerText.split(" ")[1])
    visitedCount ++;
    paragraph.innerText = `visited ${visitedCount} times`
  }
}