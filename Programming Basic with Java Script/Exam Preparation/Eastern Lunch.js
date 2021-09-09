
function EastornLunch(arg1,arg2,arg3){
    let Kozunaci = Number(arg1);
    let KoriQica = Number(arg2);
    let KorabiiKG = Number(arg3);
    let KozunaciTotal = Kozunaci * 3.20;
    let KoriQicaTotal = KoriQica * 4.35;
    let QicaTotal = KoriQica * 12 * 0.15;
    let KorabiiTotal = KorabiiKG * 5.40;
    let Total = KorabiiTotal + KozunaciTotal + KoriQicaTotal + QicaTotal
    console.log(Total.toFixed(2));

}
EastornLunch(3,2,3)