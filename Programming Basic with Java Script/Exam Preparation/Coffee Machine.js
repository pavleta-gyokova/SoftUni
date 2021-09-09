function coffeeMachine(drink,sugar,drinksNum){
    drinksNum = Number(drinksNum);
    let drinkPrice = 0;
    if (drink === "Espresso") {
        switch(sugar){
            case "Without":
                drinkPrice = 0.9;
                break;
            case "Normal":
                drinkPrice = 1;
                break;
            case "Extra":
                drinkPrice = 1.2;
                break;        
        }
        
    } else if (drink === "Cappuccino") {
        switch(sugar){
            case "Without":
                drinkPrice = 1;
                break;
            case "Normal":
                drinkPrice = 1.2;
                break;
            case "Extra":
                drinkPrice = 1.6;
                break;        
        }
        
    } else if (drink === "Tea") {
        switch(sugar){
            case "Without":
                drinkPrice = 0.5;
                break;
            case "Normal":
                drinkPrice = 0.6;
                break;
            case "Extra":
                drinkPrice = 0.7;
                break;        
        }
        
    }
    let totalPrice = drinkPrice * drinksNum;

   if (sugar === "Without") {
       totalPrice = totalPrice * 0.65;
   } 
   if (drink === "Espresso" && drinksNum >= 5) {
       totalPrice = totalPrice * 0.75;
       
   } 
   if (totalPrice > 15) {
       totalPrice = totalPrice * 0.80;
       
   }
    console.log(`You bought ${drinksNum} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`)


}
coffeeMachine("Cappuccino","Normal","13")