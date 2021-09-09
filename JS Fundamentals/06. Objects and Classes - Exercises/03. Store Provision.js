function solve(currentStock,orderedStock){
    let products = {};

    currentStock.forEach((element, i) => {
        if(i % 2 === 0){
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        products[product] = quantity;
        }   
    });

    for(let index = 0; index < orderedStock.length; index += 2){
        let product = orderedStock[index];
        let quantity = Number(orderedStock[index + 1]);
        if(products[product] === undefined){
        products[product] = 0;
        }
        products[product] += quantity;
        

    }

    for(product in products){
        console.log(`${product} -> ${products[product]}`)
    }


    

}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )