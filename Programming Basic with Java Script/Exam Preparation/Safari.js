function safari(budget,fuelL,day){
    budget = Number(budget);
    fuelL = Number(fuelL);
    let fuelSum = fuelL * 2.10;
    let totalSum = fuelSum + 100;
    let discount = 0;
    if (day === "Saturday") {
        discount = totalSum * 0.10;
        
    } else if (day === "Sunday") {
        discount = totalSum * 0.2;
        
    }
    let finalSum = totalSum - discount;
    if (budget >= finalSum) {
        console.log(`Safari time! Money left: ${(budget - finalSum).toFixed(2)} lv.`);
        
    } else if (budget < finalSum) {
        console.log(`Not enough money! Money needed: ${(finalSum - budget).toFixed(2)} lv.`);
        
    }

}
safari(105.20,15,"Sunday")

