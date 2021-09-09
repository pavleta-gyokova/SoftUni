function solve(input1,input2){
    let sum = 0;
    let isEqual = true;
    for(let i = 0; i < input1.length; i++){
        input1[i] = Number(input1[i]);
        input2[i] = Number(input2[i]);

        if(input1[i] === input2[i]){
            sum += input1[i];
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            sum = 0;
            break;
        }
    }
    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['1','2','3','4','5'], ['1','2','4','4','5'])