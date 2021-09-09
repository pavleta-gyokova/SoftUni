function facturiel(number){
    let sum = 1
    for (let index = 1; index <= number; index++){
    
        sum  = sum * index
    }
console.log(sum)
}
facturiel("8")