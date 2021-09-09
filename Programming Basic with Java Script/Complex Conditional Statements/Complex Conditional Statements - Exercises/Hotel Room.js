function hotelRoom(month,nights){
    nights = Number(nights);
    let priceStudioPerNight = 0
    let priceApartmentPerNight = 0
    switch(month){
        case "May":
        case "October":
            priceStudioPerNight = 50;
            priceApartmentPerNight = 65;
            if (nights > 7 && nights <= 14) {
                priceStudioPerNight = 50 * 0.95;
                
            } else if (nights > 14) {
                priceStudioPerNight = 50 * 0.7;
                priceApartmentPerNight = 65 * 0.9;
            }
            break;
        case "June":
        case "September":
            priceStudioPerNight = 75.20;
            priceApartmentPerNight = 68.70;
            if (nights > 14) {
                priceStudioPerNight = 75.20 * 0.8;
                priceApartmentPerNight = 68.70 * 0.9;
                
            }
            break;
        case "July":
        case "August":
            priceStudioPerNight = 76;
            priceApartmentPerNight = 77;
            if (nights > 14) {
                priceApartmentPerNight = 77 * 0.9;
                
            }
            break;
                               
    }
    let finalPriceStudio = (priceStudioPerNight * nights).toFixed(2);
    let finalPriceApartment = (priceApartmentPerNight * nights).toFixed(2);
    console.log(`Apartment: ${finalPriceApartment} lv.`);
    console.log(`Studio: ${finalPriceStudio} lv.`)
}

hotelRoom("August",
"20")


