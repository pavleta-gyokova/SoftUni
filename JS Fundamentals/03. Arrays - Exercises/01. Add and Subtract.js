function solve(input){
    let firstSum = 0;
    let secondSum = 0;
    let newArray = [];

    for(let i = 0; i < input.length; i++){
        let currentNumber = Number(input[i]);
        if(currentNumber % 2 === 0){
            firstSum += currentNumber
            currentNumber += i;
            secondSum += currentNumber;
            newArray[i] = currentNumber
        } else {
            firstSum += currentNumber;
            currentNumber -= i;
            secondSum += currentNumber;
           newArray[i] = currentNumber
        }
    }
    console.log(newArray);
    console.log(firstSum);
    console.log(secondSum);

}
solve([5, 15, 23, 56, 35])