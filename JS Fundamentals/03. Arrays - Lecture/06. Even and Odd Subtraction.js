function solve(input){
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < input.length; i++){
        let currentNumber = (Number(input[i]));
        if(currentNumber % 2 === 0){
            evenSum += currentNumber;
        } else if(currentNumber % 2 !== 0){
            oddSum += currentNumber;
        }
    }
    let result = evenSum - oddSum;
    console.log(result)
}
solve([1,2,3,4,5,6])