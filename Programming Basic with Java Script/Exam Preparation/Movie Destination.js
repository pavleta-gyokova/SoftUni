function movieDestination(budget,destination,season,days){
    budget = Number(budget);
    days = Number(days);
    let expenses = 0;
    if (season === "Winter") {
        switch(destination) {
            case "Dubai":
                expenses = 45000;
                break;
            case "Sofia":
                expenses = 17000;
                break;
            case "London":
                expenses = 24000;        
        }
        
    } else if (season === "Summer") {
        switch(destination) {
            case "Dubai":
                expenses = 40000;
                break;
            case "Sofia":
                expenses = 12500;
                break;
            case "London":
                expenses = 20250;        
        }
        
    }
    let totalExpenses = expenses * days;
    let finalExpenses
     if (destination === "Dubai") {
         finalExpenses = totalExpenses * 0.7;

     } else if (destination === "Sofia") {
         finalExpenses = totalExpenses * 1.25;
         
     } else {
         finalExpenses = totalExpenses;
     }
     if (budget >= finalExpenses) {
         console.log(`The budget for the movie is enough! We have ${(budget - finalExpenses).toFixed(2)} leva left!`);
         
     } else if (budget < finalExpenses) {
         console.log (`The director needs ${(finalExpenses - budget).toFixed(2)} leva more!`);
         
     }
}
movieDestination("1000000","Dubai","Summer","5")