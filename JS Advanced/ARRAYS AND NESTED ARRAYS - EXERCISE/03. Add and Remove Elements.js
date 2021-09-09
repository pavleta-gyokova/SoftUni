function solve (input){
    let startingNumber = 1;
    let newArr = [];
    input.forEach(commnad => {
        if(commnad === 'add'){
            newArr.push(startingNumber);
        } else if (commnad === 'remove'){
            newArr.pop();
        }
        startingNumber++
    });
    console.log(newArr.length > 0 ? newArr.join("\n") : `Empty`);
}
solve(['remove', 
'remove', 
'remove']


)