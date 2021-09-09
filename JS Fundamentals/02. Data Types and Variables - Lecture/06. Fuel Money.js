function fuelMoney(distance,passengers,fuelPricePer1L){
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let neededMoney = neededFuel * fuelPricePer1L;
    console.log(`Needed money for that trip is ${neededMoney}lv.`)
}
fuelMoney(260, 9, 2.49)
