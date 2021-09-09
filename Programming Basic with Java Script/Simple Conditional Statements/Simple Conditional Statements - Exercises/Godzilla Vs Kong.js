function godzillaVsKong(arg1,arg2,arg3){
    let Buget = Number(arg1);
    let Statist = Number(arg2);
    let DressPerStatist = Number(arg3);
    let FinalDressPrice = Statist * DressPerStatist;
    let Decor = Buget * 0.1;
    if (Statist > 150) {
        FinalDressPrice = FinalDressPrice * 0.9;
        
    }
    let TotalMoney = Decor + FinalDressPrice;
    if (TotalMoney > Buget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(TotalMoney - Buget).toFixed(2)} leva more.`);
        
    } if (TotalMoney <= Buget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(Buget - TotalMoney).toFixed(2)} leva left.`);
        
    }
}
godzillaVsKong("9587.88",
"222",
"55.68")


