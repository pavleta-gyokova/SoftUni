function cinemaF(args){
    args = []
    let totalSeats = Number(args[0]);
    let currentGroupofPeople = 0;
    let cinemaIncome = 0;
    let totalIncome = 0;
    for (let index = 1; index < args.length; index++){
        currentGroupofPeople = args[index];
        totalSeats -= currentGroupofPeople;
        if (currentGroupofPeople % 3 === 0){
            cinemaIncome = (currentGroupofPeople * 5) - 5;
        } else {
            cinemaIncome = currentGroupofPeople * 5;
        }
        totalIncome += cinemaIncome;
    
        if (currentGroupofPeople == "Movie time!"){
            break;
        }
        if (totalSeats <= 0 ){
            break;
    }
}
    
   
        
    if (totalSeats < 0){
        console.log(`The cinema is full.`)
        console.log(`Cinema income - ${totalIncome} lv.`)
    } else {
        console.log(`There are ${totalSeats} seats left in the cinema.`);
        console.log(`Cinema income - ${totalIncome} lv.`)
    }


}
cinemaF("60","10","6","3","20","15")