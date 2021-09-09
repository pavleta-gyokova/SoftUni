function solve (input){
    let storage = new Map;

    input.forEach(line => {
        let [stock,quantity] = line.split(" ");
            quantity = Number(quantity)
        
        if(storage.has(stock)){
            let oldQuantity = storage.get(stock);
            storage.set(stock,oldQuantity + quantity);
        } else {
            storage.set(stock,quantity);
        }
    });
    for(let kvp of storage.entries()){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)