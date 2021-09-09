function solve(wordstoReplace, text) {
    let words = wordstoReplace.split(', ');

    words.forEach(word => {
        let textToReplace = '*'.repeat(word.length);
        text = text.replace(textToReplace,word);
    });
    console.log(text);

}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)