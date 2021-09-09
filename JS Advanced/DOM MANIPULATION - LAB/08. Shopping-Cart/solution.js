function solve() {
  let addButtons = document.getElementsByClassName('add-product');
  let totalMoney = 0;
  let textAreaElement = document.getElementsByTagName('textarea').value;
  console.log(textAreaElement);
  Array.from(addButtons).forEach((x)=>{
     x.addEventListener('click',function(e){
       let parent = e.currentTarget.parentElement;
       let price = parent.nextSibling.nextElementSibling.textContent
       let name = parent.previousSibling.previousElementSibling.firstChild.nextElementSibling.textContent;
       totalMoney += price;
       let pElement = document.createElement('p');
       textAreaElement = `Added ${name} for ${price} to the cart.\n`; 
       
      

     })
  })

}