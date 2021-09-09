function easterTrip(destination,date,nights){
    nights = Number(nights);
    let pricePerNight = 0
    switch (destination) {
        case "France":
            if (date === "21-23") {
                pricePerNight = 30;
            } else if (date === "24-27") {
                pricePerNight = 35;
            } else if (date === "28-31") {
                pricePerNight = 40;
            }
            break;
        case "Italy":
            if (date === "21-23") {
                pricePerNight = 28;
            } else if (date === "24-27") {
                pricePerNight = 32;
            } else if (date === "28-31") {
                pricePerNight = 39;
            }
            break;
        case "Germany":
            if (date === "21-23") {
                pricePerNight = 32;
            } else if (date === "24-27") {
                pricePerNight = 37;
            } else if (date === "28-31") {
                pricePerNight = 43;
            }
            break;      
    }
    let finalPrice = (pricePerNight * nights).toFixed(2)
    console.log(`Easter trip to ${destination} : ${finalPrice} leva.`)
}
easterTrip("France","28-31","8")