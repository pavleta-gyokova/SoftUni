function solve(input) {
    let result = "";
    let minerObj = {};

    for (let i = 0; i < input.length; i++) {
        let currentResource = input[i];
        i++
        let currenQuantity = Number(input[i]);
        if (!Object.keys(minerObj).includes(currentResource)) {
            minerObj[currentResource] = currenQuantity;
        } else {
            minerObj[currentResource] += currenQuantity;
        }
        
    }
    for(let resource in minerObj){
        console.log(`${resource} -> ${minerObj[resource]}`);
    }

   

}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

)