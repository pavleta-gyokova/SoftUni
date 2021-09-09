function Djokovic(arg1,arg2,arg3){
    let OneRacket = Number(arg1);
    let NumRacket = Number(arg2);
    let NumShoesh = Number(arg3);
    let RacketPrice = OneRacket * NumRacket;
    let OneShoe = OneRacket / 6;
    let ShoePrice = NumShoesh * OneShoe;
    let OtherAcss = (ShoePrice + RacketPrice) * 0.2;
    let TotalEqupment = ShoePrice + RacketPrice + OtherAcss;
    let DjokovicPrice = TotalEqupment / 8;
    let SponsorPrice = TotalEqupment * 7/8;
    console.log(`Price to be paid by Djokovic ${Math.floor(DjokovicPrice)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(SponsorPrice)}`)

}
Djokovic(850,4,2)