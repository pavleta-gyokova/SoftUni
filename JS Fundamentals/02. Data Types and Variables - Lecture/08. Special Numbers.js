function specialNumber(number){

    for(let i = 1; i <= number; i++){
        i = i.toString()
        let sum = 0
    for(let j = 0; j < i.length; j++){
        let currentDigit = Number(i[j]);
        sum += currentDigit;

        }
        
        if(sum == 5){
            console.log(`${i} -> True`)
        } else if(sum == 7){
            console.log(`${i} -> True`)
        } else if(sum == 11){
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}
specialNumber(15)