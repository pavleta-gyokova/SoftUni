function workingHours(hours,day){
    hours = Number(hours);
   if (hours >= 10 && hours < 18) {
       switch(day) {
           case "Monday":
           case "Tuesday":
           case "Wednesday":
           case "Thursday":
           case "Friday":
           case "Saturday":
               console.log("open");
               break;
            case "Sunday":
                console.log("closed");
                break;                  
       }
       
   } else if (hours >= 18 || hours < 10) {
            switch(day) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                case "Saturday":
                console.log("closed");
                break;
                case "Sunday":
                    console.log("closed");
                    break;              
    }
       
   }
}
workingHours("11",
"Sunday")


