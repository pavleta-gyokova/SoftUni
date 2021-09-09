function solve(typeOfFruit, grams, pricePerKg) {
    finalPrice = (pricePerKg * (grams / 1000)).toFixed(2);
    console.log(`I need $${finalPrice} to buy ${(grams / 1000).toFixed(2)} kilograms ${typeOfFruit}.`);
}
solve('orange', 2500, 1.80)