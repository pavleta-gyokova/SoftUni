function solve(input) {
    let resultArr = [];
    let inputArr = input.split("");
    console.log(inputArr);
    for (let i = 0; i < inputArr.length; i++) {
        let currentChar = inputArr[i];
        let nextChar = inputArr[i + 1];
        if (currentChar !== nextChar) {
            resultArr.push(currentChar)

        }
        
    }
    console.log(resultArr.join(""));
}
    solve('qqqwerqwecccwd')