function divison(number){
    let currentDivision = 0
    if(number % 2 === 0){
        currentDivision = 2;
    }
    if(number % 3 === 0){
        currentDivision = 3
    }
    if(number % 6 === 0){
        currentDivision = 6;
    }
    if(number % 7 === 0){
        currentDivision = 7;
    }
    if(number % 10 === 0){
        currentDivision = 10;
    }


    if(currentDivision > 0){
        console.log(`The number is divisible by ${currentDivision}`);
    } else {
        console.log(`Not divisible`)
    }
}
divison(1643)