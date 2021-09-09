function Charity(arg1,arg2,arg3,arg4,arg5){
    let Days = Number(arg1);
    let Bakers = Number(arg2);
    let Cakes = Number(arg3);
    let Waffle = Number(arg4);
    let Pancakes = Number(arg5);
    let CakesPrice = Cakes * 45;
    let WafflePrice = Waffle * 5.80;
    let PancakesPrice = Pancakes * 3.20;
    let BakersPerdayCakes = Bakers * CakesPrice;
    let BakersPerdayWaffle = Bakers * WafflePrice;
    let BakersPerDayPankacakes = Bakers * PancakesPrice;
    let BakerPerDay = BakersPerdayWaffle + BakersPerdayCakes + BakersPerDayPankacakes;
    let BakersAllDay = BakerPerDay * Days;
    let Sum = BakersAllDay - (BakersAllDay * 1/8);
    console.log(Sum);



}
Charity(23,8,14,30,16)