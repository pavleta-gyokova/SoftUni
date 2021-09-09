function oscarWeek(name,hall,ticketsNum){
    ticketsNum = Number(ticketsNum);
    let ticketPrice = 0;
    if (hall === "normal") {
        switch(name) {
            case "A Star Is Born":
                ticketPrice = 7.50;
                break;
            case "Bohemian Rhapsody":
                ticketPrice = 7.35;
                break;
            case "Green Book":
                ticketPrice = 8.15;
                break;
            case "The Favourite":
                ticketPrice = 8.75;
                break;            

        }
        
    } else if (hall === "luxury") {
        switch(name) {
            case "A Star Is Born":
                ticketPrice = 10.50;
                break;
            case "Bohemian Rhapsody":
                ticketPrice = 9.45;
                break;
            case "Green Book":
                ticketPrice = 10.25;
                break;
            case "The Favourite":
                ticketPrice = 11.55;
                break;            

        }
        
    } else if (hall === "ultra luxury") {
        switch(name) {
            case "A Star Is Born":
                ticketPrice = 13.50;
                break;
            case "Bohemian Rhapsody":
                ticketPrice = 12.75;
                break;
            case "Green Book":
                ticketPrice = 13.25;
                break;
            case "The Favourite":
                ticketPrice = 13.95;
                break;            

        }
        
    }
    let totalPrice = ticketPrice * ticketsNum;
    console.log(`${name} -> ${totalPrice.toFixed(2)} lv.`)
}
oscarWeek("Green Book","normal","63")