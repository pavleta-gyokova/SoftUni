function perfectNumber(number){
    let current = 0;
    for(let index = 0; index <= number; index++){
        if(number % index === 0){
            current += index
        }
    }
    if(current / 2 === number && current !== 0){
        console.log(`We have a perfect number!`)
    } else {
        console.log(`It's not so perfect.`)
    }
}
perfectNumber(28)