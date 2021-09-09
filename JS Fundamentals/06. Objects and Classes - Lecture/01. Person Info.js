function solve(firstNames,lastNames,ages){
    let personalInfo = {
        firstName: firstNames,
        lastName: lastNames,
        age: ages
    }

    for(let keys in personalInfo){
        console.log(`${keys}: ${personalInfo[keys]}`)
    }
}
solve("Peter", 
"Pan",
"20"
)