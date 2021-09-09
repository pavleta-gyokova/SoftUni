function sumOfTwoNumbers(input){
    let starNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let combincount = 0;
    for(let first = starNumber; first <= endNumber; first++){
        if(isFound){
            break;
        }
        for(let second = starNumber; second <= endNumber; second++){
            combincount ++;
            if(first + second == magicNumber){
                isFound = true;
                console.log(`Combination N:${combincount} (${first} + ${second} = ${magicNumber})`)
            }
        }
    }
    if(!isFound){
        console.log(`${combincount} combinations - neither equals ${magicNumber}`)
    }

}
sumOfTwoNumbers(["23",
"24",
"20"])

