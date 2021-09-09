function Zoo(arg1,arg2){
    let dogFood = Number(arg1);
    let otherFood = Number(arg2);
    let totalMoneyDogFood = dogFood * 2.50;
    let totalMoneyOtherFood = otherFood * 4;
    console.log(`${totalMoneyDogFood + totalMoneyOtherFood} lv.`)

}
Zoo("5","4")