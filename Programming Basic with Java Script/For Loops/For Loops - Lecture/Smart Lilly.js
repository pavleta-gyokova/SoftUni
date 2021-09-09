function smartLilly(years,washerPrice,toyPrice){
    years = Number(years);
    washerPrice = Number(washerPrice);
    toyPrice = Number(toyPrice);
    let money = 0;
    let moneyCount = 0;
    let toyNum = 0
    for (let age = 1; age <= years; age++) {
        if(age % 2 === 0) {
            moneyCount ++;
            money += moneyCount * 10
        } else {
            toyNum++;
        }
    }
    
    
    let totalToyPrice = toyNum * toyPrice;
    let totalMoneyLeft = money - moneyCount;
    let totalMoneySaved = totalToyPrice + totalMoneyLeft;

    if(totalMoneySaved >= washerPrice){
        console.log(`Yes! ${(totalMoneySaved - washerPrice).toFixed(2)}`);

    } else {
        console.log(`No! ${(washerPrice - totalMoneySaved).toFixed(2)}`)
    }


}
smartLilly("21","1570.98","3")