function solve(martix) {
    let maxNumbers = martix
    .map(row => Math.max(...row))
    console.log(Math.max(...maxNumbers));
}
solve(
[[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
)