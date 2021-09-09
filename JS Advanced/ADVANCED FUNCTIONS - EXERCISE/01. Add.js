function solution(number) {
    return function add (toAdd){
        return number + toAdd;
    }
}
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));




