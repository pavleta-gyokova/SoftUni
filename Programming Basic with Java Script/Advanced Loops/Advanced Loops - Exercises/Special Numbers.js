function specialNumber(input){
    let inputNumber = Number(input[0]);
    let output = "";


    for(let number = 1111; number <= 9999; number++){
        let numberAsString = number + "";
        let isSpecial = true;

        for(let index = 0; index < 4; index++){
            let result =  inputNumber % Number(numberAsString[index]);

            if(result !== 0){
                isSpecial = false;
                break;
            }
        }
        if(isSpecial){
            output += number + " ";
        }
    }
    console.log(output)
}
specialNumber(["3"])