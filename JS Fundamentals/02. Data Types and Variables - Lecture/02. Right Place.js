function rightPlace(firstString,char,secondString){
    let res = firstString.replace('_', char);
    let output = res === secondString ? 'Matched' : 'Not Matched';
    console.log(output)
}
rightPlace('Str_ng', 'I', 'Strong')