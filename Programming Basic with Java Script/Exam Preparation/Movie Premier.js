function moviePremier(movie,food,ticketsNum){
    ticketsNum = Number(ticketsNum);
    let ticketPrice = 0;
    if (movie === "John Wick") {
        switch(food) {
            case "Drink":
                ticketPrice = 12;
                break;
            case "Popcorn":
                ticketPrice = 15;
                break;
            case "Menu":
                ticketPrice = 19;
                break;        
        }
        
    } else if (movie === "Star Wars") {
        switch(food) {
            case "Drink":
                ticketPrice = 18;
                break;
            case "Popcorn":
                ticketPrice = 25;
                break;
            case "Menu":
                ticketPrice = 30;
                break;        
        }
        
    } else if (movie === "Jumanji") {

         switch(food) {
            case "Drink":
                ticketPrice = 9;
                break;
            case "Popcorn":
                ticketPrice = 11;
                break;
            case "Menu":
                ticketPrice = 14;
                break;        
        }
    }
    let totalToicketPrice = ticketPrice * ticketsNum;
    let dicount = 0;
    if (movie === "Star Wars" && ticketsNum >= 4) {
        dicount = totalToicketPrice * 0.3;
        
    } else if (movie === "Jumanji" && ticketsNum == 2) {
        dicount = totalToicketPrice * 0.15;
        
    }
    let finalPrice = totalToicketPrice - dicount;
    console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`)
}
moviePremier("Jumanji","Menu","2")