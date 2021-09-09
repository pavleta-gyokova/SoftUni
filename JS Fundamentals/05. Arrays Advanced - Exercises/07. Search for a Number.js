function solve(arrayOfNumber,commandArr){

    let numberToTake = commandArr[0];
    let numbersToDelete = commandArr[1];
    let numberToSearch = commandArr[2];

    let newArr = arrayOfNumber.splice(0,numberToTake);
    
    let cutArr = newArr.slice(numbersToDelete, newArr.legth)

    let numberOfTimes = 0
    for(let number of cutArr){
        if(number === numberToSearch){
            numberOfTimes ++;
        }
    }
    console.log(`Number ${numberToSearch} occurs ${numberOfTimes} times.`)
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )