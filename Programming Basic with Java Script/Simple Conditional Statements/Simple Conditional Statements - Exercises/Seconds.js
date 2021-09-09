function Seconds(arg1,arg2,arg3){
    let FistSeconds = Number(arg1);
    let SecondSeconds = Number(arg2);
    let ThirdSeconds = Number(arg3);
    let TotalTime = FistSeconds + SecondSeconds + ThirdSeconds;
    let Minutes = Math.floor(TotalTime / 60);
    let Seconds = TotalTime % 60;
    if (Seconds < 10) {
        console.log (`${Minutes}:0${Seconds}`);
        
    } else {
        console.log(`${Minutes}:${Seconds}`)
    }

}
Seconds("35", "45", "44")