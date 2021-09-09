function solve(input){
    let arr = input.map((x) => Number(x));
    let result = arr[0] + (arr[arr.length - 1])
    return result
}
console.log(solve(['20', '30', '40']))