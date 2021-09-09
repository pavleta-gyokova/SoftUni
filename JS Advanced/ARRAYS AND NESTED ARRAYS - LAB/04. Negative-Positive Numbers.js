function solve(input) {
    let positiveArr = [];
    let negativeArr = [];
    input.forEach(number => {
        if (number < 0) {
            negativeArr.splice(0,0,number);
        } else {
            positiveArr.push(number);
        }
    });
    let result = negativeArr.concat(positiveArr).join("\n")

    console.log(result);
}
solve([3, -2, 0, -1])