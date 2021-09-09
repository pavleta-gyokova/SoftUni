function newHouse(flowerType,flowerNumber,budget){
    flowerNumber = Number(flowerNumber);
    budget = Number(budget);
    let rosePrice = flowerNumber * 5;
    let dahliasPrice = flowerNumber * 3.80;
    let tulipsPrice = flowerNumber * 2.80;
    let narcissusPrice = flowerNumber * 3;
    let gladiousPrice = flowerNumber * 2.50;
    let totalFlowerPrice = 0
    switch (flowerType){
        case "Roses":
            if (flowerNumber <= 80) {
             totalFlowerPrice = rosePrice;   
            } else if (flowerNumber > 80) {
                totalFlowerPrice = rosePrice * 0.9;
                
            }
            break;
        case "Dahlias":
            if (flowerNumber <= 90) {
                totalFlowerPrice = dahliasPrice;
                
            } else if (flowerNumber > 90) {
                totalFlowerPrice = dahliasPrice * 0.85;
                
            }
            break;
        case "Tulips":
            if (flowerNumber <= 80) {
                totalFlowerPrice = tulipsPrice;
                
            } else if (flowerNumber > 80) {
                totalFlowerPrice = tulipsPrice * 0.85;
                
            }
            break;
        case "Narcissus":
            if (flowerNumber < 120) {
                totalFlowerPrice = narcissusPrice * 1.15;
                
            } else if (flowerNumber >= 120) {
                totalFlowerPrice = narcissusPrice;
                
            }
            break;
        case "Gladiolus":
            if (flowerNumber < 80) {
                totalFlowerPrice = gladiousPrice * 1.2;
                
            } else if (flowerNumber >= 80) {
                totalFlowerPrice = gladiousPrice;
                
            }
            break;       
    }
    if (budget >= totalFlowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${(budget - totalFlowerPrice).toFixed(2)} leva left.`);
        
    } else if (budget < totalFlowerPrice) {
        console.log(`Not enough money, you need ${(totalFlowerPrice - budget).toFixed(2)} leva more.`);
        
    }

}
newHouse("Narcissus",
119,
360)







