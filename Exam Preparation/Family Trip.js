function familyTrip(budget,nights,pricePerNigth,addExpenses){
    budget = Number(budget);
    nights = Number(nights);
    pricePerNigth = Number(pricePerNigth);
    addExpenses = Number(addExpenses) / 100;
    let totalPriceNights = 0;
    if (nights <= 7) {
        totalPriceNights = pricePerNigth * nights;
        
    } else if (nights > 7) {
        totalPriceNights = (pricePerNigth * 0.95) * nights;
        
    }
    let totalExpenses = budget * addExpenses;
    finalPrice = totalExpenses + totalPriceNights;
    if (finalPrice <= budget) {
        console.log(`Ivanovi will be left with ${(budget - finalPrice).toFixed(2)} leva after vacation.`)
        
    } else if (finalPrice > budget) {
        console.log(`${(finalPrice - budget).toFixed(2)} leva needed.`)
        
    }
}
familyTrip("800.50","8","100","2")