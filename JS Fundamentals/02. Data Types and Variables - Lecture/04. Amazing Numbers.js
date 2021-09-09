function amazingNumbers(inputNumber){
    inputNumber = inputNumber.toString();
    let sum = 0;
    for(let i = 0; i < inputNumber.length; i++){
        sum += Number(inputNumber[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${inputNumber} Amazing? True` : `${inputNumber} Amazing? False`);
}
amazingNumbers(1233)