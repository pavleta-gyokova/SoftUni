function solve(text,word){
    text = text.replace(word,'*'.repeat(word.length));
    while(text.includes(word)){
        text = text.replace(word,'*'.repeat(word.length));
    }

console.log(text);


}
solve("A small sentence with some small words", "small");