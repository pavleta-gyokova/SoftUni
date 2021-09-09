function scooker(stage,ticketType,tickestNum,picture){
    tickestNum = Number(tickestNum);
    let pricePerTicket = 0
   
    switch(stage){
        case "Quarter final":
            if (ticketType === "Standard") {
                pricePerTicket = 55.50;
                
            } else if (ticketType === "Premium") {
                pricePerTicket = 105.20;

            } else if (ticketType === "VIP") {
                pricePerTicket = 118.90;
            }
            break;
        case "Semi final":
            if (ticketType === "Standard") {
                pricePerTicket = 75.88;
                
            } else if (ticketType === "Premium") {
                pricePerTicket = 125.22;

            } else if (ticketType === "VIP") {
                pricePerTicket = 300.40;
            }
            break;
        case "Final":
            if (ticketType === "Standard") {
                pricePerTicket = 110.10;
                
            } else if (ticketType === "Premium") {
                pricePerTicket = 160.66;

            } else if (ticketType === "VIP") {
                pricePerTicket = 400;
            }
            break;

    }
    let ticketPrice = pricePerTicket * tickestNum;
    let picturePrice = 40 * tickestNum;
    let finalPrice = 0
    if (ticketPrice > 4000) {
        finalPrice = ticketPrice * 0.75;
        
    } else if (ticketPrice <= 4000 && ticketPrice > 2500) {
        if (picture === "Y") {
            finalPrice = (ticketPrice * 0.9) + picturePrice;
            
        } else if (picture === "N") {
            finalPrice = ticketPrice * 0.9;
            
        }
        
    } else if (ticketPrice <= 2500) {
        if (picture === "Y") {
            finalPrice = ticketPrice + picturePrice;
            
        } else if (picture === "N") {
            finalPrice = ticketPrice
            
        }
        
    }
    console.log(finalPrice.toFixed(2))
}
scooker("Quarter final","Standard","11","N")