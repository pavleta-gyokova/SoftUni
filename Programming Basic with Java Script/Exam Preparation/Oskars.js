function Oscars(arg1){
    let RentBuilding = Number(arg1);
    let Status = RentBuilding * 0.7;
    let Katering = Status * 0.85;
    let Sound = Katering / 2;
    let TotalRent = RentBuilding + Status + Katering + Sound;
    console.log(TotalRent.toFixed(2));

}
Oscars(3500)