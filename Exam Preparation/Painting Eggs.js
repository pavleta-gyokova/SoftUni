function paintingEggs(eggSize,eggColor,eggsNum){
    eggsNum = Number(eggsNum);
    let eggPrice = 0;
    if (eggSize === "Large") {
        switch(eggColor) {
            case "Red":
                eggPrice = 16;
                break;
            case "Green":
                eggPrice = 12;
                break;
            case "Yellow":
                eggPrice = 9;
                break;         
        }
        
    } else if (eggSize === "Medium") {
        switch(eggColor) {
            case "Red":
                eggPrice = 13;
                break;
            case "Green":
                eggPrice = 9;
                break;
            case "Yellow":
                eggPrice = 7;
                break;         
        }
        
    } else if (eggSize === "Small") {
        switch(eggColor) {
            case "Red":
                eggPrice = 9;
                break;
            case "Green":
                eggPrice = 8;
                break;
            case "Yellow":
                eggPrice = 5;
                break;         
        }
        
    }
    let EggPriceTotal = eggPrice * eggsNum;
    let FinalPrice = EggPriceTotal * 0.65;
    console.log(`${FinalPrice.toFixed(2)} leva.`)
}
paintingEggs("Small","Yellow","3")