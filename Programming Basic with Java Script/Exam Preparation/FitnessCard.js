function fitnessCard(budget,gender,age,sport){
    budget = Number(budget);
    age = Number(age);
    let cardPrice = 0;
    if (gender === "m") {
        switch(sport) {
            case "Gym":
                cardPrice = 42;
                break;
            case "Boxing":
                cardPrice = 41;
                break;
            case "Yoga":
                cardPrice = 45;
                break;
            case "Zumba":
                cardPrice = 34;
                break;
            case "Dances":
                cardPrice = 51;
                break;
            case "Pilates":
                cardPrice = 39;
                break;                    
        }
        
    } else if (gender === "f") {
        switch(sport) {
            case "Gym":
                cardPrice = 35;
                break;
            case "Boxing":
                cardPrice = 37;
                break;
            case "Yoga":
                cardPrice = 42;
                break;
            case "Zumba":
                cardPrice = 31;
                break;
            case "Dances":
                cardPrice = 53;
                break;
            case "Pilates":
                cardPrice = 37;
                break;                    
        }
        
    }
    if (age <= 19) {
        cardPrice = cardPrice * 0.8;
        
    }
    if (budget > cardPrice) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
        
    } else if (budget < cardPrice) {
        console.log(`You don't have enough money! You need $${(cardPrice - budget).toFixed(2)} more.`)
        
    }
}
fitnessCard("20","f","15","Yoga")