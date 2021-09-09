function solve(first,second,third){

    let sumOFNumbers = sum(first,second);
    let result = subtract(sumOFNumbers, third);
    console.log(result)



    function sum(a, b){
        return a + b;
    }

    function subtract(a, b){
        return a - b;
    }
}
solve(23,6,10)