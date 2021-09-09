function skiHoliday(days,room,rating){
    days = Number(days);
    let onePersonRoom = (days - 1) * 18;
    let apartment = (days - 1) * 25;
    let presidentApartment = (days - 1) * 35;
    let dicount = 0;
    if (days < 10) {
        switch(room) {
            case "room for one person":
                dicount = 0;
                break;
            case "apartment":
                dicount = apartment * 0.3;
                break;
            case "president apartment":
                dicount = presidentApartment * 0.1;
                break;
        }           
            
        
    } else if (days >= 10 && days <= 15) {
        switch(room) {
            case "room for one person":
                dicount = 0;
                break;
            case "apartment":
                dicount = apartment * 0.35;
                break;
            case "president apartment":
                dicount = presidentApartment * 0.15;
                break;
        }           
        
    } else if (days > 15) {
        switch(room) {
            case "room for one person":
                dicount = 0;
                break;
            case "apartment":
                dicount = apartment * 0.5;
                break;
            case "president apartment":
                dicount = presidentApartment * 0.2;
                break;
        }           
        
    }
    let totalSumOneRoom = onePersonRoom - dicount;
    let totalSumApartment = apartment - dicount;
    let totalSumPresidentApartment = presidentApartment - dicount;
    let finalPrice = 0
    if (rating === "positive") {
        switch(room) {
            case "room for one person":
                finalPrice = totalSumOneRoom * 1.25;
                console.log((finalPrice).toFixed(2));
                break;
            case "apartment":
                finalPrice = totalSumApartment * 1.25;
                console.log((finalPrice).toFixed(2));
                break;
            case "president apartment":
                finalPrice = totalSumPresidentApartment * 1.25;
                console.log((finalPrice).toFixed(2));
                break;     
        }
        
    } else if (rating === "negative") {
        switch(room) {
            case "room for one person":
                finalPrice = totalSumOneRoom * 0.9;
                console.log((finalPrice).toFixed(2));
                break;
            case "apartment":
                finalPrice = totalSumApartment * 0.9;
                console.log((finalPrice).toFixed(2));
                break;
            case "president apartment":
                finalPrice = totalSumPresidentApartment * 0.9;
                console.log((finalPrice).toFixed(2));
                break;     
        }
        
    }
}
skiHoliday("14",
"apartment",
"positive")