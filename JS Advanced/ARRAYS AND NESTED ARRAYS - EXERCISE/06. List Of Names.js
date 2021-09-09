function solve(input){
    
    let startingNumber = 1;

    let result = input
    .sort((a,b) =>  a.localeCompare(b))
    .forEach(element => {
        console.log(`${startingNumber}.${element}`);
        startingNumber++
    });


}
solve(["John", "Bob", "Christina", "Ema"])