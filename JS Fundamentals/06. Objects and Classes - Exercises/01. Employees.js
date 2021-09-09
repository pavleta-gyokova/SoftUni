function solve(input){
        let employess = [];

        input.forEach(name => {
           let employee = {
               name,
               personalNumber : name.length
           }
           employess.push(employee);
        });
    
    for(let employee of employess){
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )