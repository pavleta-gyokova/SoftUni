function multiplicationTable(){
    for(let index1 = 1; index1 <= 10; index1++){
        for(let index2 = 1; index2 <= 10; index2++){
            let result = index1 * index2;
            console.log(`${index1} * ${index2} = ${result}`)
        }
    }
}
multiplicationTable()