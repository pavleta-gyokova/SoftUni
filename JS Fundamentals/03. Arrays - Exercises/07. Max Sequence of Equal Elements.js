function solve(arr){
   
    let newArr = [];

    for(let index = 0; index < arr.length; index++){
        let element = arr[index]
        let current = [element];

        for(let i = index + 1; i < arr.length; i++){
            let nextElement = arr[i];
            
            if(element === nextElement){
                current.push(nextElement);
                index = i;
            
            } else {
                break;
            }

        }
        if(current.length > newArr.length){
            newArr = current;
        }
    }
    console.log(newArr.join(' '));

}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])