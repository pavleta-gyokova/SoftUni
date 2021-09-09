function solve(input) {
    let arr = [...input]
    let sumA1 = 0;
    let sum1A1 = 0;
    let concat = "";
    arr.filter((x) => {
        sumA1 += x;
        return sumA1
    });
    console.log(sumA1);

    arr.filter((x) => {
        sum1A1 += 1 / x;
        return sum1A1
    });
    console.log(sum1A1);
    arr.map((x) => x + "").filter((x) => {
        concat += x;
        return concat
    })
    console.log(concat);
}
solve([2, 4, 8, 16])