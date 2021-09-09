function cinema(type,row,coloum){
    row = Number(row);
    coloum = Number(coloum);
    let profit = 0;
    if (type === "Premiere") {
        profit = row * coloum * 12;
        
    } else if (type === "Normal") {
        profit = row * coloum * 7.50;
        
    } else if (type === "Discount") {
        profit = row * coloum * 5;
        
    }
    console.log(`${profit.toFixed(2)} leva`)
}
cinema("Discount",
"12",
"30")


