function solve(input){
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        let currentNumber = Number(input[i]);
        if(currentNumber % 2 === 0){
            sum += currentNumber;
        }
    }
    console.log(sum)
}
solve(['2','4','6','8','10'])