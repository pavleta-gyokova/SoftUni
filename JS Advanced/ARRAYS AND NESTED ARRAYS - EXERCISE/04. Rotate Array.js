function solve(arr, rotationCount) {

    for (let i = 0; i < rotationCount; i++) {
        arr.unshift((arr.pop()));
    }
    console.log(arr.join(" "));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)