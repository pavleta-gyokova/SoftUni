function solve(input){
    let person = JSON.parse(input);
    for(let keys in person){
        console.log(`${keys}: ${person[keys]}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')