function solve(number) {

    let arr = (number + "").split("").map((x) => Number(x));
    let count = 0;
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count++
        }
        sum += arr[i];
    }
    if (count + 1 < arr.length) {
        console.log('false');

    } else {
        console.log('true');

    }
    console.log(sum);



}
solve(1234)