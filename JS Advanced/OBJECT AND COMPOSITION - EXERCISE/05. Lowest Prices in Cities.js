function solve(input) {
    let products = {};

    input.forEach(line => {
        let [townName, productName, productPrice] = line.split(' | ');
        productPrice = Number(productPrice);

        if (!Object.keys(products).includes(productName)) {
            products[productName] = {};
        }

        products[productName][townName] = productPrice;

    });

    let finalProducts = {};

    Object.keys(products).forEach((product) => {
        let minPrice = Math.min(...Object.values(products[product]));
        let town = Object.keys(products[product]).find(town => products[product][town] === minPrice);
        finalProducts[product] = {};
        finalProducts[product][town] = minPrice
    })

    let result = '';

    for (let line in finalProducts) {
        result += `${line}`
        for (let other in finalProducts[line]) {
            result += ` -> ${finalProducts[line][other]} (${other})\n`
        }
    }
    console.log(result);

}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'])
