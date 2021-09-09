function message(text) {
    let wordCount = 0;
    for (let index = 0; index < text.length; index++) {
        let currentChar = text.charAt(index);
        if (currentChar === " ") {
            wordCount++;
        }
    }
    if(wordCount + 1 <= 10){
        console.log(`The message was send successfully!`)
    } else {
        console.log(`The message is too long to be send! Has ${wordCount +1} words.`)
    }
}
message("This message has ten words and you can send it!")