function sumNumbers(number){
    let sum = 0
    for (let index = 0; index < number.length; index++){
        let currentNum = Number (number[index]);
        sum += currentNum
    }
console.log(`The sum of the digits is:${sum}`)
}
sumNumbers("1234")