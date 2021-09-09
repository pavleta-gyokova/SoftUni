function FruitMarket(arg1,arg2,arg3,arg4,arg5){
    let StrawberryPrice = Number(arg1);
    let Bananas = Number(arg2);
    let Oranges = Number(arg3);
    let Rasberry = Number(arg4);
    let Strawberry = Number(arg5);
    let StrawberryF = StrawberryPrice * Strawberry;
    let RasberryPrice = StrawberryPrice / 2;
    let RasberryF = RasberryPrice * Rasberry;
    let OrangePrice = RasberryPrice * 0.6;
    let OrangeF = OrangePrice * Oranges;
    let BananaPrice = RasberryPrice * 0.2;
    let BananaF = BananaPrice * Bananas;
    console.log(StrawberryF + RasberryF + OrangeF + BananaF);


}
FruitMarket(48,10,3.3,6.5,1.7)