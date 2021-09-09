function race(liters, litersConsumed, laps) {
    liters = Number(liters);
    litersConsumed = Number(litersConsumed);
    laps = Number(laps);
 
    let currentLap = 0;
    for (let index = 1; index <= laps; index++) {
        liters -= litersConsumed
    
        if (liters < 0) {
            currentLap = index
            break;
        }
        
       
    }




    if (liters < 0) {
        console.log(`You are out of fuel in round ${currentLap}!`)
    } else {
        console.log(`Congrats! You won the race!`)
        
    }
}
race("50", "4.3", "30")