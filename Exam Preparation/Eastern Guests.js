function easternGuests(guestNum,budget){
    guestNum = Number(guestNum);
    budget = Number(budget);
    let kozunakNum = Math.ceil(guestNum / 3);
    let kozunakPrice = kozunakNum * 4;
    let eggsNum = guestNum * 2;
    let eggsPrice = eggsNum * 0.45;
    let moneyNeeded = kozunakPrice + eggsPrice;
    if (budget >= moneyNeeded) {
        console.log(`Lyubo bought ${kozunakNum} Easter bread and ${eggsNum} eggs.`);
        console.log(`He has ${(budget - moneyNeeded).toFixed(2)} lv. left.`);
    } else if (budget < moneyNeeded) {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(moneyNeeded - budget).toFixed(2)} lv. more.`);
        
    }
}
easternGuests(9,12)
