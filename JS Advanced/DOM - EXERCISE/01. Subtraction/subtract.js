function subtract() {
    let number1Element = document.getElementById('firstNumber');
    let number2Element = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');

    resultElement.textContent = Number(number1Element.value) - Number(number2Element.value);
}