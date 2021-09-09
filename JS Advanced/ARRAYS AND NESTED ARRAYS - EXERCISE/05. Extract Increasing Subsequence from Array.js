function solve(input) {
    
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let output = input.reduce((acc,current)=> {
        if(current >= maxNumber){
            maxNumber = current;
            acc.push(maxNumber)
        }
        return acc
        
    },[])
    return output
   

}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
solve([1,
    2,
    3,
    4]
)
solve([20,
    3,
    2,
    15,
    6,
    1])