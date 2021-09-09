function vacantion(input){
    let index = 0;
    let neededMoneyVacation = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;
    let saveOrSpend = input[index];
    index++;
    let amauntSpendOrSave = Number(input[index]);
    let countSpend = 0;
    let days = 0;
    while (countSpend < 5 && currentMoney < neededMoneyVacation){
        if(saveOrSpend === "spend"){
            countSpend++;
            currentMoney -= amauntSpendOrSave
            if (currentMoney < amauntSpendOrSave) {
            currentMoney = 0;
            }
        } else if (saveOrSpend === "save") {
            currentMoney += amauntSpendOrSave;
            countSpend = 0;
        }
        days++;
        index++
        saveOrSpend = input[index];
        index++
        amauntSpendOrSave = (Number(input[index]));
    }
    if(currentMoney >= neededMoneyVacation){
        console.log(`You saved the money for ${days} days.`)
    } else {
        console.log(`You can't save the money.`);
        console.log(days);
    }
}
vacantion(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


