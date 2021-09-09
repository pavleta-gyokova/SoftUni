function solve(arr,bombInfo){
    let bomb = bombInfo[0];
    let range = bombInfo[1];

    let index = arr.indexOf(bomb);

    while(index > -1){
        // arr.splice(Math.max((index - range), 0), Math.min(range,index));
        arr.splice(Math.max((index - range), 0), (index + range));
        // index = arr.indexOf(bomb)
        // arr.splice(index,(range + 1));
        index = arr.indexOf(bomb);
    }

    console.log(getSum(arr))

    function getSum(array){
        let sum  = 0;
        for(let n of array){
            sum += n
        }
        return sum;
    }

}
solve([1, 4, 2, 2, 1, 2, 2, 2, 9],
    [4, 2]           
    )