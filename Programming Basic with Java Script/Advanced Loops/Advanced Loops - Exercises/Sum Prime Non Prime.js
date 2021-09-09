function sumPrimeNonPrime(input){
    let index = 0;
    let currentNum = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;
    
    while(currentNum !== "stop"){
        let number = Number(currentNum);
        let lastDevid = Math.sqrt(number);
        let isPrime = true;

        if(number >= 0){
            for(let divider = 2; divider<= lastDevid; divider++){
                let result = number % divider;
                if(result === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primeSum +=number;
            } else {
                nonPrimeSum += number;
            }
        } else {
            console.log("Number is negative.")
        }

        index++;
        currentNum = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
