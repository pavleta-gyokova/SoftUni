function oneTime(hoursExam,minutesExam,hoursArriving,minutesArriving){
    hoursExam = Number(hoursExam);
    minutesExam = Number(minutesExam);
    hoursArriving = Number (hoursArriving);
    minutesArriving = Number(minutesArriving);
    let totalMinutesExam = hoursExam * 60 + minutesExam;
    let totalMinutesArriving = hoursArriving * 60 + minutesArriving;
    let late
    let early
    let newMinutes
    let newHours
    if (totalMinutesArriving > totalMinutesExam) {
        late = totalMinutesArriving - totalMinutesExam;
        newHours = Math.floor(late / 60);
        newMinutes = late % 60;
        if (newHours === 0) {
            console.log(`Late`)
            console.log(`${newMinutes} minutes after the start`);
            
        } else if (newHours > 0) {
            if (newMinutes < 10) {
                console.log(`Late`);
                console.log(`${newHours}:0${newMinutes} hours after the start`);
                
            } else {
                console.log(`Late`);
                console.log(`${newHours}:${newMinutes} hours after the start`)
            }
        
    } 
        
    } else if (totalMinutesArriving <= totalMinutesExam) {
        early = totalMinutesExam - totalMinutesArriving;
        newHours = Math.floor(early / 60);
        newMinutes = early % 60;
        if (early <= 30 && early != 0) {
            console.log(`On time`);
            console.log(`${newMinutes} minutes before the start`);
            
        } else if (early == 0) {
            console.log(`On time`);
        } else if (early > 30) {
            if (newHours === 0) {
                console.log(`Early`)
                console.log(`${newMinutes} minutes before the start`);
                
            } else if (newHours > 0) {
                if (newMinutes < 10) {
                    console.log(`Early`);
                    console.log(`${newHours}:0${newMinutes} hours before the start`);
                    
                } else {
                    console.log(`Early`);
                    console.log(`${newHours}:${newMinutes} hours before the start`)
                }
            
        }
    }   
}            
    
}
oneTime("0",
"05",
"23",
"55")











