function cinemaTickets(day){
    let price = 0;
    switch (day){
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            console.log(price);
            break;
        case "Wednesday":
        case "Thursday":
            price = 14;
            console.log(price);
            break;
        case "Saturday":
        case "Sunday":
            price = 16;
            console.log(price)
            break;        
                   
    }
}
cinemaTickets("Wednesday")