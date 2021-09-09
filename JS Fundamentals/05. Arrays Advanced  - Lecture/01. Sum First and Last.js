function solve(arr){
    let firstElement = Number(arr[0]);
    let lastElement = Number(arr.pop());
    let result = firstElement + lastElement;
    return result
    
}
let result = solve(['5', '10']);
console.log(result)