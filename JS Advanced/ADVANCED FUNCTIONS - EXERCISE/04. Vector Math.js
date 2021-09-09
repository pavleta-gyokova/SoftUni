vectorResult = {
    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply:(vector,multiplier) => vector.map(ele => ele * multiplier),
    length: ([x,y]) => Math.sqrt(x ** 2 + y ** 2),
    dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
    cross: ([x1, y1], [x2, y2]) => x1 * y2  - y1 *x2

}
console.log(vectorResult.add([1, 1], [1, 0]));
console.log(vectorResult.multiply([3.5, -2], 2));
console.log(vectorResult.length([3, -4]));
console.log(vectorResult.dot([1, 0], [0, -1]));
console.log(vectorResult.cross([3, 7], [1, 0]));
