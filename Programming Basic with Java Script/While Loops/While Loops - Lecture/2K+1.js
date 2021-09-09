function solve(input){
    let number = Number(input[0]);
    let current = 1;
    while(current <= number){
        console.log(current);
        current = current * 2 + 1;

    }

}
solve(["31"])