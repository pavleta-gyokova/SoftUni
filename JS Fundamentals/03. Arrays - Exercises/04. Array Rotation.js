function solve (input,rot){
    let rotations = rot % input.length;
    let resultArr = [];

    for(let index in input){
        if(index >= rotations){
            let element = input[index];
            resultArr.push(element)
        }
    }

    for( let index in input){
        if(index < rotations){
            let element = input[index];
            resultArr.push(element);
        } else{
            break;
        }
    }
    console.log(resultArr.join(' '))
}
solve([51, 47, 32, 61, 21], 2)