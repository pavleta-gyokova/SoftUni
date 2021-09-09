function solve(number){
    let oddDigits = getOddDigits(number);
    let evenDigits = getEvenDigits(number);
    
    console.log(`Odd sum = ${getSum(oddDigits)}, Even sum = ${getSum(evenDigits)}`);
     
    function getOddDigits (n){
        let oddDigits = [];

        while(n > 0){
            let lastDigit = n % 10;

            if(lastDigit % 2 !== 0){
                oddDigits.push(lastDigit);
            }

            n = parseInt((n / 10));
        }
        return oddDigits;
    }


    function getEvenDigits (n){
        let evenDigits = [];

        while(n > 0){
            let lastDigit = n % 10;

            if(lastDigit % 2 === 0){
                evenDigits.push(lastDigit);
            }

            n = parseInt((n / 10));
        }
        return evenDigits;
    }

    function getSum(arr){
        let sum = 0;
        for(let number of arr){
            sum += number;
        }
        return sum;
    }

}
solve(1000435)