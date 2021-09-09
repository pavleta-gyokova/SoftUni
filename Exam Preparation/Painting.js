function rePainting(naylonQ,paintQ,waterQ,hours) {
    naylonQ = Number(naylonQ);
    paintQ = Number(paintQ);
    waterQ = Number(waterQ);
    hours = Number(hours);
    let totalnaylon = naylonQ + 2;
    let naylonPrice = totalnaylon * 1.50;
    let totalPaint =  paintQ * 1.10;
    let paintPrice = totalPaint * 14.50;
    let waterPrice = waterQ * 5;
    let materialPrice = naylonPrice + paintPrice + waterPrice + 0.4;
    let hoursPrice = hours * (materialPrice * 0.3);
    let total = materialPrice + hoursPrice;
    console.log(`Total expenses: ${total.toFixed(2)} lv.`);


    

}
rePainting("10","11","4","8")