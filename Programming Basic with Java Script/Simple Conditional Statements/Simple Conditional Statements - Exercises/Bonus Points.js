function BonusPoints(arg1){
    let FirstPoints = Number(arg1);
    let Additional = 0.0;
    if (FirstPoints <= 100) {
        Additional = 5; 
    } else if (FirstPoints <= 1000) {
        Additional = FirstPoints * 0.2;
    } else {
        Additional = FirstPoints * 0.1;
    }
    if (FirstPoints % 2 === 0) {
        Additional =  Additional + 1;
    } else if (FirstPoints % 10 === 5) {
        Additional = Additional + 2
    }
    console.log(Additional);
    console.log(FirstPoints + Additional)
}
BonusPoints(175)