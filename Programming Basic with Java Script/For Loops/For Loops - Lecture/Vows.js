function vows(word){
    let sum = 0
    for (let index = 0; index < word.length; index++){
        let currentLetter = word[index];
        switch(currentLetter){
            case "a":
               sum++
               break;
            case "e":
                sum += 2;
                break;
            case "i":
                 sum += 3;
                 break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;    

        }

    }
    console.log(sum)
}
vows("hello")