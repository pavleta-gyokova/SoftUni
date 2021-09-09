function solve(matrix) {
    let firstSum = 0;
    let secondSum = 0;
    let elementIndex = 0;

    matrix.forEach(row => {
        firstSum += row[elementIndex];
        secondSum += row[(row.length - 1 - elementIndex)];
        elementIndex++
        
    });
    console.log(firstSum + ' ' + secondSum);
}
solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
)