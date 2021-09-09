function oldBooks(input){
    let index = 0;
    let favoriteBoook = input[index];
    index++
    let otherBooks = input[index];
    let isBookFound =  false;
    while (otherBooks !== "No More Books") {
        if (otherBooks === favoriteBoook){
            isBookFound = true;
            break;
        }
        index++
        otherBooks = input[index];
    }
    if (isBookFound === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`)
    }
    
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


