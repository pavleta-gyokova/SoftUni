function solve() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            flavour: 10
        }
    };

    const invetory = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let commands = {
        restock: (ingridient, quntity) => {
            invetory[ingridient] += quntity;
            return 'Success'
        },
        prepare:(product,quantity)=> {
            let recipy = Object.entries(recipes[product]);
            for(let [ingrdient,needquant] of recipy){
                if(invetory[ingrdient] < needquant * quantity){
                    return `Error: not enough ${ingrdient} in stock`
                };

            recipy.forEach(([ingrdient,needquant]) => {
                invetory[ingrdient] -= needquant * quantity;
            });
                return 'Success'
            }
        },
        report: () => 
            Object.entries(invetory).map(([ingrdient,quantity])=> `${ingrdient}=${quantity}`).join(' ')
        
    };

    return (input) => {
        let [command,items,count] = input.split(' ');
        return commands[command](items,Number(count));
    }
}
let manager = solve();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));


