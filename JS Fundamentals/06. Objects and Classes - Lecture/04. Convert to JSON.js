function solve(name,lastName,hairColour){
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColour
    }
    console.log(JSON.stringify(person))
}
solve('George',
'Jones',
'Brown'
)