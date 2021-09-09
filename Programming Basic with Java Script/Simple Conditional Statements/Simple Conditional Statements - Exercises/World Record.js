function WorldRecord(arg1,arg2,arg3){
    let RecordInSeconds = Number(arg1);
    let DistansM = Number(arg2);
    let SecondsPer1M = Number(arg3);
    let IvanTime = DistansM * SecondsPer1M;
    let SlowTime = Math.floor(DistansM / 15)
    let SlowTimeTotal = SlowTime * 12.5
    let TotalTimeIvan = IvanTime + SlowTimeTotal
    if (RecordInSeconds <= TotalTimeIvan) {
        console.log(`No, he failed! He was ${(TotalTimeIvan - RecordInSeconds).toFixed(2)} seconds slower.`)
        
    } if (RecordInSeconds > TotalTimeIvan) {
        console.log(`Yes, he succeeded! The new world record is ${TotalTimeIvan.toFixed(2)} seconds.`)
        
    }
}
WorldRecord("55555.67",
"3017",
"5.03")



