function balance(input){
    let bankAccount = 0;
    let index = 0;
    let increase = input[index];
    

    while(increase !== "NoMoreMoney"){
        let currentIncrease = Number(increase);
        if(currentIncrease < 0){
            console.log(`Invalid operation!`);
            break;
        }
        bankAccount += currentIncrease;
        console.log(`Increase: ${currentIncrease.toFixed(2)}`)
        index++
        increase = input[index];
        


    }
    console.log(`Total: ${bankAccount.toFixed(2)}`) 
}
balance(["120",
"45.55",
"-150"])

