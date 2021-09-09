function divide(number){
    let divisibleTo2 = 0;
    let divisibleTo3 = 0;
    let divisibleTo4 = 0;
    for(let index = 1; index < number.length; index++){
        let currentNumber = number[index];
        if(currentNumber % 2 === 0){
            divisibleTo2++;
        }
        if(currentNumber % 3 === 0) {
            divisibleTo3++;
        }
        if(currentNumber % 4 === 0){
            divisibleTo4++
        }
    }
    let total = number[0];
    let divisibleTo2Total = (divisibleTo2 / total * 100).toFixed(2);
    let divisibleTo3Total = (divisibleTo3 / total * 100).toFixed(2);
    let divisibleTo4Total = (divisibleTo4 / total * 100).toFixed(2);
    

    let percents = [divisibleTo2Total,divisibleTo3Total,divisibleTo4Total]
    for(i = 0; i < percents.length; i++){
        console.log(`${percents[i]}%`)
    }
}
divide(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
