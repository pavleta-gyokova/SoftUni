function solve(length,numbers){
    let resultArray = [];
    let output = '';

    for(let i = 0; i < length; i++){
        resultArray[i] = numbers[i]; 
    }
    for(let i = length - 1; i >=0; i--){
        output += resultArray[i] + ' '
        
    }
    console.log(output)
    
}
solve(3, [10, 20, 30, 40, 50])


let numbersArray = [5,6,8,12];
console.log(numbersArray[numbersArray.length - 1])