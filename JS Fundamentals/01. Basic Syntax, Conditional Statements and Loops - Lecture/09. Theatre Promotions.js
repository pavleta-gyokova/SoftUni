function thearePromotions(day,age){
    age = Number(age);
    let price = 0;
    isValid = true;
    if(age < 0 || age > 122){
        isValid = false;
    } else if(age >= 0 && age <= 18){
        switch (day){
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 5;
                break;        
        }
    } else if(age <= 64){
        switch (day){
            case "Weekday":
                price = 18;
                break;
            case "Weekend":
                price = 20;
                break;
            case "Holiday":
                price = 12;
                break;        
        }
    } else if(age <= 122){
        switch (day){
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 10;
                break;        
        }
    }

    if(!isValid){
        console.log("Error!")
    } else{
        console.log(`${price}$`)
    }
}
thearePromotions('Holiday',-12)