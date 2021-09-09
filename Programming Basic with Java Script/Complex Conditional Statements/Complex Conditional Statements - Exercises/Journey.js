function journey(budget,season){
    budget = Number(budget);
    let expenses = 0;
    let destination;
    let campOrHotel;
    if (budget <= 100) {
        destination = "Bulgaria";
        
    } else if (budget <= 1000) {
        destination = "Balkans";
    } else if (budget > 1000) {
        destination = "Europe";
        
    }
    switch (season) {
        case "summer":
            if (destination === "Bulgaria" || destination === "Balkans") {
                campOrHotel = "Camp";
                
            } else if (destination === "Europe") {
                campOrHotel = "Hotel";
                
            }
            break;
        case "winter":
            campOrHotel = "Hotel";
            break;    
    }
    if (destination === "Bulgaria") {
        if (season === "summer") {
            expenses = budget * 0.3;
            
        } else if (season === "winter") {
            expenses = budget * 0.7;
            
        }
        
    } else if (destination === "Balkans") {
        if (season === "summer") {
            expenses = budget * 0.4;
        } else if (season === "winter") {
            expenses = budget * 0.8;
            
        }
        
    } else if (destination === "Europe") {
        expenses = budget * 0.9;
        
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${campOrHotel} - ${expenses.toFixed(2)}`)
}
journey("1500", "summer")