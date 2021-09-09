function printAndSum(firstNumber,secondNumber){
    totalSum = 0;
    string = "";
    

    for(let i = firstNumber; i <= secondNumber; i++){
        string += i + " ";
        
        totalSum += i;
    }
    console.log(string)
    console.log(`Sum: ${totalSum}`)
}
printAndSum(5,10)