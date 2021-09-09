function mobileOperator(time,type,internet,months){
    months = Number(months);
    let contractPrice;
    if (time === "one") {
        switch(type) {
            case "Small":
                contractPrice = 9.98;
                break;
            case "Middle":
                contractPrice = 18.99;
                break;
            case "Large":
                contractPrice = 25.98;
                break;   
            case "ExtraLarge":
                contractPrice = 35.99;
                break;         
        }
        
    } else if (time === "two") {
        switch(type) {
            case "Small":
                contractPrice = 8.58;
                break;
            case "Middle":
                contractPrice = 17.09;
                break;
            case "Large":
                contractPrice = 23.59;
                break;   
            case "ExtraLarge":
                contractPrice = 31.79;
                break;         
        }
        
    }
    let addinternetPrice = 0
    if (internet === "yes") {
        if (contractPrice <= 10) {
            addinternetPrice = contractPrice + 5.50;
            
        } else if (contractPrice <= 30) {
            addinternetPrice = contractPrice + 4.35;
            
        } else if (contractPrice > 30) {
            addinternetPrice = contractPrice + 3.85;
            
        }
        
    } else if (internet === "no") {
        addinternetPrice = contractPrice;
        
    }
    let discount = 0
    if (time === "two") {
        discount = addinternetPrice * 0.0375
        
    }
    let finalPrice = (addinternetPrice - discount) * months;
    console.log(`${finalPrice.toFixed(2)} lv.`)
}
mobileOperator("two","Large","no","10")