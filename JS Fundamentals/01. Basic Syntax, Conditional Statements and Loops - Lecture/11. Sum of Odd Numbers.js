function sumOfOddNumbers(n){
    let sum = 0
    let counter = 1;
    let currentNumber = 1
    while(counter <= n){
        if(currentNumber % 2 !== 0){
            sum += currentNumber;
            console.log(currentNumber)
            currentNumber +=2
            counter++;
        }
    }
    console.log(`Sum: ${sum}`)
}
sumOfOddNumbers(3)