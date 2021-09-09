function solve(input) {
    let characters = input.split("");
    let indexses = [];
    
    for(let index in characters){
        let currentChar = characters[index];
        let asciidValue = currentChar.charCodeAt(0);

        if(asciidValue >= 65 && asciidValue <= 90){
            indexses.push(Number(index));
        }
    }
    let words = [];

    for(let i = 0; i < indexses.length; i++){
        words.push(input.substring(indexses[i],indexses[i + 1]))
    }

    console.log(words.join(", "))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')