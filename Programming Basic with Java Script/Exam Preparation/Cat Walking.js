function catWalking(walkMinutes,walkNumPerDay,kcalsPerDay){
    walkMinutes = Number(walkMinutes);
    walkNumPerDay = Number(walkNumPerDay);
    kcalsPerDay = Number(kcalsPerDay);
    let burnKcal = (walkMinutes * walkNumPerDay) * 5;
    let enoughBurn = kcalsPerDay * 0.5;
    if (enoughBurn <= burnKcal ) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnKcal}.`);
    } else if (enoughBurn > burnKcal) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnKcal}.`)
        
    }
}
catWalking(40,2,300)