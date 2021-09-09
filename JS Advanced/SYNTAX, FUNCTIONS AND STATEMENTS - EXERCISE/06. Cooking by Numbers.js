function solve(number, op1, op2, op3, op4, op5) {
    number = Number(number);

    let result = number;
    let arr = [op1, op2, op3, op4, op5];

    arr.forEach((operation) => {

        if (operation == 'chop') {
            result = result / 2;
            console.log(result);
        } else if (operation == 'dice') {
            result = Math.sqrt(result);
            console.log(result);
        } else if (operation == 'spice') {
            result = result + 1;
            console.log(result);
        } else if (operation == 'bake') {
            result = result * 3;
            console.log(result);
        } else if (operation == 'fillet') {
            result = result * 0.8;
            console.log(result);
        }
    })

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')