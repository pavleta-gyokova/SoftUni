function solve(input){
    let output = '';
    let resultArray = []

   

    for(let i = input.length - 1; i >= 0; i--){
        resultArray[i] = input[i]
        output += resultArray[i] + ' ';
    }
    console.log(output);

}
solve(['abc', 'def', 'hig', 'klm', 'nop'])