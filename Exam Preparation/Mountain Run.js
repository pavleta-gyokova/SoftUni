function mountainRun(recordSec,distansM,SecPer1M){
    recordSec = Number(recordSec);
    distansM = Number(distansM);
    SecPer1M = Number(SecPer1M);
    let georgeTime = distansM * SecPer1M;
    let slowNum = Math.floor(distansM / 50);
    let slowTimeTotal = slowNum * 30;
    let georgeTotalTime = georgeTime + slowTimeTotal;
    if (georgeTotalTime < recordSec) {
        console.log(`Yes! The new record is ${georgeTotalTime.toFixed(2)} seconds.`);
        
    } else if (georgeTotalTime >= recordSec) { 
        console.log(`No! He was ${(georgeTotalTime - recordSec).toFixed(2)} seconds slower.`);
    }
}
mountainRun(1377,389,3)