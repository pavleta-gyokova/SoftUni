function rounding(number,precision){
    if(precision > 15){
        precision = 15
    }
    let currentNumber = number.toFixed(precision);
    
    console.log(parseFloat(currentNumber));
}