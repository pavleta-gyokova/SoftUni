function EasternBakery(arg1,arg2,arg3,arg4,arg5){
    let FlourPerKg = Number(arg1);
    let FlourKgTotal = Number(arg2);
    let SugarKg = Number(arg3);
    let EggsCard = Number(arg4);
    let Weat = Number(arg5);
    let FlourPrice = FlourPerKg * FlourKgTotal;
    let SugarPrice = FlourPerKg * 0.75;
    let TotalSugar = SugarPrice * SugarKg;
    let EggsPrice = FlourPerKg * 1.1;
    let TotalEggs = EggsPrice * EggsCard;
    let WeatPrice = SugarPrice * 0.2;
    let TotalWeat = WeatPrice * Weat;
    let Total = FlourPrice + TotalSugar + TotalEggs + TotalWeat;
    console.log(Total.toFixed(2));

    



}
EasternBakery(50,10,3.5,6,1)