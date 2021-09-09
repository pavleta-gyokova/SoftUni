function easternParty(guestNum,foodPerPeson,budget){
    guestNum = Number(guestNum);
    foodPerPeson = Number(foodPerPeson);
    budget = Number(budget);
    // let totalFood = guestNum * foodPerPeson;
    let cake = budget * 0.1;
    let discount = 0;
    if (guestNum >= 10 && guestNum <= 15) {
        discount = foodPerPeson * 0.15;
        
    } else if (guestNum > 15 && guestNum <= 20) {
        discount = foodPerPeson * 0.20;
        
    } else if (guestNum > 20) {
        discount = foodPerPeson * 0.25;
        
    }
    let totalFood = guestNum * (foodPerPeson - discount);
    let totalSum = totalFood + cake;
    if (budget > totalSum) {
        console.log(`It is party time! ${(budget - totalSum).toFixed(2)} leva left.`);
        
    } else if (budget < totalSum) {
        console.log(`No party! ${(totalSum - budget).toFixed(2)} leva needed.`);
        
    }

}
easternParty(24,35,550)