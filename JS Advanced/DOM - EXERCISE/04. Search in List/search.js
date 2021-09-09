function search() {
   let liEmelents = document.querySelectorAll('#towns> li');
   let input = document.querySelector('input').value;
   let matchesFound = 0;

   for(let li of liEmelents){
      if((li.textContent).toLowerCase().includes(input.toLowerCase())){
         li.style.fontWeight = 'bold'
         li.style.textDecoration = 'underline';
   
         matchesFound++
      } else {
         li.style.fontWeight = ''
         li.style.textDecoration = '';
      }
   }
      
   
   document.getElementById('result').textContent = `${matchesFound} matches found`
     

}
