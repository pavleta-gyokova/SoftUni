function Skeleton(arg1,arg2,arg3,arg4){
    let minutesControl = Number(arg1);
    let secondsControl = Number(arg2);
    let lenght = Number(arg3);
    let secondsFor100meters = Number(arg4);
    let controlTime = (minutesControl * 60) + secondsControl
    let slowTimeSec = (lenght / 120) * 2.5;
    let martinTime = (lenght / 100) * secondsFor100meters - slowTimeSec
    if (martinTime <= controlTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${martinTime.toFixed(3)}.`);

        
    } else if (martinTime > controlTime) {
        console.log(`No, Marin failed! He was ${(martinTime - controlTime).toFixed(3)} second slower.`)
        
    }
}
Skeleton(1,20,1546,12)