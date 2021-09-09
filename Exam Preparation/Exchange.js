function Exchange(arg1,arg2,arg3){
    let Bitcoin = Number(arg1);
    let Yan = Number(arg2);
    let Comision = Number(arg3);
    let BitcoinToLv = Bitcoin * 1168;
    let YantoUSd = Yan * 0.15;
    let UsdToBG = YantoUSd *  1.76;
    let TotalBG = BitcoinToLv + UsdToBG;
    let TotalEuro = TotalBG / 1.95
    let ComissionTotal = TotalEuro * Comision / 100;
    let TotalSum = TotalEuro - ComissionTotal;
    console.log (TotalSum.toFixed(2));



}
Exchange(1,5,5)