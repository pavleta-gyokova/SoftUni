function solve(word, text) {

    let newWord = word.toLowerCase();
    text = text.toLowerCase();

    if(text.split(" ").includes(newWord)){
        console.log(word);
    } else{
        console.log(`${word} not found!`);
    }
}
solve('java',
    'JavaScript is the best programming language'
)