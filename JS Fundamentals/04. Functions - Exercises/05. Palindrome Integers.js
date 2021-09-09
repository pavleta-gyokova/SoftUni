function solve(input){

    for (let number of input){
        let reversed = reverseNumber(number);
        console.log(number === reversed);
    }
    

    function reverseNumber(number){
        let reversedValue = '';

        while(number > 0){
            let lastDigit = number % 10;
            reversedValue += lastDigit;
            number = parseInt((number / 10));
        }
        return Number(reversedValue);
    }
}
solve([123,323,421,121])