function travelAgance(town,packet,vipDiscount,days){
    days = Number(days);
    let PricePernight = 0;
    let Dicount = 0;
    if (town === "Bansko" || town === "Borovets") {
        if (packet === "withEquipment") {
            PricePernight = 100;
            if (vipDiscount === "yes") {
                Dicount = PricePernight * 0.1;
                
            }
            
        } else if (packet === "noEquipment") {
            PricePernight = 80;
            if (vipDiscount === "yes") {
                Dicount = PricePernight * 0.05;
                
            }
            
            
        } else {
            console.log(`Invalid input!`)
        }
    } else if (town === "Varna" || town === "Burgas") {
        if (packet === "withBreakfast") {
            PricePernight = 130;
            if (vipDiscount === "yes") {
                Dicount = PricePernight * 0.12;
                
            }
            
        } else if (packet === "noBreakfast") {
            PricePernight = 100;
            if (vipDiscount === "yes") {
                Dicount = PricePernight * 0.07;
                
            }
            
            
        } else {
            console.log(`Invalid input!`)
        }

    } else {
        console.log(`Invalid input!`)
    }

    let totalExpense = 0;
    if (days < 1) {
        console.log(`Days must be positive number!`)
        
    } else if (days > 7) {
        totalExpense = (PricePernight - Dicount) * (days - 1);
        console.log(`The price is ${totalExpense.toFixed(2)}lv! Have a nice time!`)
    }
    else if (days > ){
        totalExpense = (PricePernight - Dicount) * days;
        console.log(`The price is ${totalExpense.toFixed(2)}lv! Have a nice time!`)
    }

    
}
travelAgance("Borovets", "noEquipment", "yes", "6")