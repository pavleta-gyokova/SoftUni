function solve(input) {
    let obj = {};

    input.forEach(line => {
        let [town, population] = line.split(' <-> ');
        population = Number(population)
        if(!Object.keys(obj). includes (town)){
            obj[town] = population;
        } else {
            obj[town] += population
        }
    
    });
    Object.entries(obj). forEach((line) => {
        console.log(`${line[0]} : ${line[1]} `)
    })
    
   

}
solve(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)