function Basketball(arg1){
    let Fee = Number(arg1);
    let Sneaker = Fee * 0.6;
    let Clothes = Sneaker * 0.8;
    let Ball = Clothes / 4;
    let Acss = Ball / 5;
    let TotalFee = Fee + Sneaker + Clothes + Ball + Acss;
    console.log(TotalFee.toFixed(2));

}
Basketball(320)