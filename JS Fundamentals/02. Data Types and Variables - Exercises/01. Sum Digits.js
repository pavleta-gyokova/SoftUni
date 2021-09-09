function sumOfDigits(number){
    let sum = 0;
    number = number.toString();
    for(let i = 0; i < number.length; i++){
        let currentDigit = Number(number[i]);
        sum += currentDigit;
    }
    console.log(sum)
}
sumOfDigits(543)