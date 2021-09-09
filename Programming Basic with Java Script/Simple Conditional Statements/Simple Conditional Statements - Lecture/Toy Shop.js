function ToyShop (arg1,arg2,arg3,arg4,arg5,arg6){
    let HolidayPrice = Number(arg1);
    let PuzzleNum = Number(arg2);
    let DollsNum = Number(arg3);
    let TeddyBearsNum = Number(arg4);
    let MinionsNum = Number(arg5);
    let TrucksNum = Number(arg6);
    let ToysPrice = (PuzzleNum * 2.6) + (DollsNum * 3) + (TeddyBearsNum * 4.10) + (MinionsNum * 8.20) + (TrucksNum * 2);
    let ToysNum = PuzzleNum + DollsNum + TeddyBearsNum + MinionsNum + TrucksNum;
    if (ToysNum >= 50) {
        let Discount = ToysPrice * 0.25;
        ToysPrice = ToysPrice - Discount;
    }
    let rent = ToysPrice * 0.10;
    let FinalProfit = ToysPrice - rent;
    if (FinalProfit >= HolidayPrice) {
        let Profit  = FinalProfit - HolidayPrice;
        console.log(`Yes! ${Profit.toFixed(2)} lv left.`);
        
    } else {
        let MoneyNeeded = HolidayPrice - FinalProfit;
        console.log(`Not enough money! ${MoneyNeeded.toFixed(2)} lv needed.`)
    }
}
ToyShop("40.8", "20", "25", "30", "50", "10")