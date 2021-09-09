function SchoolSupplies(arg1,arg2,arg3,arg4){
    let PenPackNum = Number(arg1);
    let MarkerPackNUm = Number(arg2);
    let BoardClean = Number(arg3);
    let Discount = Number(arg4) / 100;
    let PenPackPrice = PenPackNum * 5.80;
    let MarketPackPrice = MarkerPackNUm * 7.20;
    let BoardCleanPrice = BoardClean * 1.20;
    let Sum = PenPackPrice + MarketPackPrice + BoardCleanPrice;
    let TotalSum = Sum - (Sum * Discount);
    console.log(TotalSum.toFixed(3));

}
SchoolSupplies(2,3,2.5,25)