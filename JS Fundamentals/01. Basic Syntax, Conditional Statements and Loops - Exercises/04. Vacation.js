function vacation(groupOfPeople,typeOfGroup,dayOfWeek){
    groupOfPeople = Number(groupOfPeople);
     let totalPricePerPerson = 0;
     if(dayOfWeek === "Friday"){
         switch(typeOfGroup){
            case "Students":
                 totalPricePerPerson = 8.45;
                 break;
            case "Business":
                totalPricePerPerson = 10.90;
                break;
            case "Regular":
                totalPricePerPerson = 15;
                break;    
         }
     } else if(dayOfWeek === "Saturday"){
        switch(typeOfGroup){
            case "Students":
                 totalPricePerPerson = 9.80;
                 break;
            case "Business":
                totalPricePerPerson = 15.60;
                break;
            case "Regular":
                totalPricePerPerson = 20;
                break;    
         }
     } else if(dayOfWeek === "Sunday"){
        switch(typeOfGroup){
            case "Students":
                 totalPricePerPerson = 10.46;
                 break;
            case "Business":
                totalPricePerPerson = 16;
                break;
            case "Regular":
                totalPricePerPerson = 22.50;
                break;    
         }
     }

     let totalPrice = totalPricePerPerson * groupOfPeople;
     let stayFor10People = totalPricePerPerson * 10

     if(typeOfGroup === "Students" && groupOfPeople >= 30){
         totalPrice *= 0.85;
     }
    if(typeOfGroup === "Business" && groupOfPeople >= 100){
        totalPrice -= stayFor10People;
    }
    if (typeOfGroup === "Regular" && (groupOfPeople >= 10 && groupOfPeople <= 20)){
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"    
    )