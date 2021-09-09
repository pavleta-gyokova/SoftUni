function solve(input) {
    let arr = []
    for(index in input){
        if(index % 2 == 0){
            arr.push(input[index]);
        }
    }
    console.log(arr.join(" "));

}
solve(['20', '30', '40', '50', '60'])
