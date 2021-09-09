function maxNum(input){
    let index = 0;
    let numbers = input[index];
    index++;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    while(numbers !== "Stop"){
        let currentNumber = Number(numbers);
        if(currentNumber > maxNumber){
            maxNumber = currentNumber;
        }
        numbers = input[index];
        index++
    }
    console.log(maxNumber)
}
maxNum(["-10",
"20",
"-30",
"Stop"])
