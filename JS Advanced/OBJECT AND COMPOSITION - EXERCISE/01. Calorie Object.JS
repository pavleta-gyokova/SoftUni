function solve(input) {

    let calrieObj = {};

    let arr = [...input];
    let food = arr[0];
    let grams = Number(arr[1]);
    calrieObj[food] = grams

    for (let index = 2; index < input.length; index += 2) {

        food = arr[index];
        grams = Number(arr[index + 1])
        calrieObj[food] = grams

    }
    console.log(calrieObj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])