function solve(inputArr){
    let resultArr = [];

    for(let element of inputArr){
        if(!resultArr.includes(element)){
            resultArr.push(element);
        }
    }
    console.log(resultArr.join(' '));
}
solve([20, 8, 12, 13, 4, 4, 8, 5])