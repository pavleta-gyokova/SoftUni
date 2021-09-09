function solve(arr,magicSum){
    
    let result = [];

    for(let i = 0; i < arr.length; i++){

        let currentElement = arr[i];

        for(let index = i + 1; index < arr.length; index++){

            let nextElement = arr[index];
            let isMagic = currentElement + nextElement === magicSum;
            if((isMagic)){
                result.push(`${currentElement} ${nextElement}`)
            }
        }
    }
    console.log(result.join('\n'))
}
solve([1, 7, 6, 2, 19, 23],
    8
    )