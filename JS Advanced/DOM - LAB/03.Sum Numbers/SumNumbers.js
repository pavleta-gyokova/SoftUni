function calc() {
   let number1Element = document.getElementById('num1');
   let number2Element = document.getElementById('num2');
   let result = document.getElementById('sum');
   
     result.value += Number(number1Element.value) +  Number(number2Element.value);
   
}
