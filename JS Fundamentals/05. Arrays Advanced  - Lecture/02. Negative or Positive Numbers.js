function solve (numbers){
    let resultArr = []
    while(numbers.length > 0){
        let currentElement = numbers.shift();
        if(currentElement < 0){
            resultArr.unshift(currentElement);
        } else {
            resultArr.push(currentElement);
        }
    }
     for(const number of resultArr){
        console.log(number);
     }
}
solve([7, -2, 8, 9])