function coins(input){
    
    let money = Number(input[0]) * 100;
    let coinsCount = 0;

    while(money > 0){
        if(money >= 200){
            coinsCount++;
            money -= 200;
        }
        if (money >= 100 && money < 200){
            coinsCount++;
            money -= 100;
        }
        if (money >= 50 && money < 100){
            coinsCount++;
            money -= 50;
        }
        if(money >= 20 && money < 50){
            coinsCount++;
            money -= 20
        }
        if(money >= 10 && money < 20){
            coinsCount++;
            money -= 10;
        }
        if(money >= 5 && money < 10){
            coinsCount++;
            money -= 5;
        }
        if(money >= 2 && money < 5){
            coinsCount++;
            money -= 2;
        }
        if(money >= 1 && money < 2){
            coinsCount++;
            money -= 1
        }
    }
    console.log(coinsCount)
}
coins(["0.59"])