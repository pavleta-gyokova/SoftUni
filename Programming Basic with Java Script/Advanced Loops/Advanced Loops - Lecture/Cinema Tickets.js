function cinemaTickets(input) {
    let index = 0;
    let nameOfMovie = input[index];
    let totalTicketsCount = 0;
    let totalStandartTicketCount = 0;
    let totalKidTicketCount = 0;
    let totalStudentTicketCount = 0;

    while (nameOfMovie !== "Finish") {
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let ticketsCount = 0;
        let standartTicketCount = 0;
        let kidTicketCount = 0;
        let studentTicketCount = 0;

        let tickets = input[index];
        while (tickets !== "End") {
            if(tickets === 'Finish'){
                break;
            }
           

            if (tickets === "standard") {
                standartTicketCount++;
                ticketsCount++;
            } else if (tickets === "kid") {
                kidTicketCount++;
                ticketsCount++

            } else if (tickets === "student") {
                studentTicketCount++;
                ticketsCount++;
            }
            index++;
            if(ticketsCount > freeSeats){
                break;
            }
            tickets = input[index];
        }
        
        let percentFull = ((ticketsCount / freeSeats) * 100).toFixed(2);
        console.log(`${nameOfMovie} - ${percentFull}% full.`);
        totalStandartTicketCount += standartTicketCount;
        totalKidTicketCount += kidTicketCount;
        totalStudentTicketCount += studentTicketCount;
        totalTicketsCount += ticketsCount;
        if(tickets === 'Finish'){
            break;
        }
        index++;
        nameOfMovie = input[index];
    }
    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${((totalStudentTicketCount / totalTicketsCount) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandartTicketCount / totalTicketsCount) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKidTicketCount / totalTicketsCount) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

