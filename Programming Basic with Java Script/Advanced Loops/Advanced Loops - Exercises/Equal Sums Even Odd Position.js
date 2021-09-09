function equalSumsEvenOddPosition(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let output = "";

    for(let number = startNumber; number <= endNumber; number++){
        let numberAsString = number + "";
        let oddSum = 0;
        let evenSum = 0;

        for(let index = 0; index < numberAsString.length; index++){
            let digits = Number(numberAsString[index]);
            
            if(index % 2 == 0){
                evenSum += digits;
            } else {
                oddSum += digits;
            }
        
        }
        if(evenSum === oddSum){
            output += number + " ";
        }
        
    }
    console.log(output)
}
equalSumsEvenOddPosition(["100000",
"100050"])

    