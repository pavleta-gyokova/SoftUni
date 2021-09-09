function solve(number){
    let currentNumber = number / 10;
    remainingNumber = 10 - currentNumber;
    let result = "";
    for(let index = 1; index <= currentNumber;index++){
        result += "%"
    }
    for(let index = 1; index <= remainingNumber; index++){
        result += `.`
    }
    if(currentNumber < 10){
        console.log(`${number}% [${result}]`);
        console.log(`Still loading...`)
    } else {
        console.log(`${number}% Complete!`);
        console.log(`[${result}]`);
    }
}
solve(40)

