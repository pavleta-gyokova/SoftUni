function fishingBoat(budget,season,people){
    budget = Number(budget);
    people = Number(people);
    let springRent = 3000;
    let summerRent = 4200;
    let autumnRent = 4200;
    let winterRent = 2600;
    let rent = 0;
   if (people <= 6) {
       switch (season) {
           case "Spring":
               rent = springRent * 0.9;
               break;
            case "Summer":
                rent = summerRent * 0.9;
                break;
            case "Autumn":
                rent = autumnRent * 0.9;
                break;
            case "Winter":
                rent = winterRent * 0.9;
                break;           
       }
       
   } else if (people <= 11) {
    switch (season) {
        case "Spring":
            rent = springRent * 0.85;
            break;
         case "Summer":
             rent = summerRent * 0.85;
             break;
         case "Autumn":
             rent = autumnRent * 0.85;
             break;
         case "Winter":
             rent = winterRent * 0.85;
             break;
    }        
       
   } else if (people >= 12) {
    switch (season) {
        case "Spring":
            rent = springRent * 0.75;
            break;
         case "Summer":
             rent = summerRent * 0.75;
             break;
         case "Autumn":
             rent = autumnRent * 0.75;
             break;
         case "Winter":
             rent = winterRent * 0.75;
             break;
    } 
   }
        let additionalDiscount = 0
   if (people % 2 === 0 && season !== "Autumn") {
            additionalDiscount = rent * 0.05   
   }
   let totalRent = rent - additionalDiscount;
    
   if (budget >= totalRent) {
       console.log(`Yes! You have ${(budget - totalRent).toFixed(2)} leva left.`);
       
   } else if (budget < totalRent) {
       console.log(`Not enough money! You need ${(totalRent - budget).toFixed(2)} leva.`)
       
   }
}
fishingBoat(2000,
    "Winter",
    13)
    


