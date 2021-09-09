function MovieProfit(Name,arg1,arg2,arg3,arg4){
    let DaysNum = Number(arg1);
    let TicketsNum = Number(arg2);
    let OneTicketPrice = Number(arg3);
    let CinemaPrecent = Number(arg4) / 100;
    let TicketPricePerDay = TicketsNum * OneTicketPrice;
    let TotalProfit = DaysNum * TicketPricePerDay;
    let CinemaProfit = TotalProfit * CinemaPrecent;
    let FinalProfit = TotalProfit - CinemaProfit;
    console.log(`The profit from the movie ${Name} is ${FinalProfit.toFixed(2)} lv.`)
}
MovieProfit("The Programmer",20,500,7.5,7)