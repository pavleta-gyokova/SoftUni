function orders(order,quantity){
    let orderTotal = 0;

    switch(order){
        case "coffee":
            orderTotal = 1.50 * quantity
            break;
        case "water":
            orderTotal = 1 * quantity;
            break;
        case "coke":
            orderTotal = 1.4 * quantity;
            break;
        case "snacks":
            orderTotal = 2 * quantity
            break;        
    }
    return orderTotal.toFixed(2)
}
console.log(orders('coffee',2))