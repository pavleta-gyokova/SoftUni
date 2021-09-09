function minNum(input){
    let index = 0;
    let numbers = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;
    while(numbers !== "Stop"){
        let currentNumber = Number(numbers);
        if(currentNumber < minNumber){
            minNumber = currentNumber;
        }
        numbers = input[index];
        index++
    }
    console.log(minNumber)
} 
minNum(["100",
"99",
"80",
"70",
"Stop"])
