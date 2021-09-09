function solve(ticketsInfoArr,sortingCriteria) {


    let sorting ={
        destination : (str1, str2) => str1.localeCompare(str2),
        price :(num1, num2) => num1 - num2,
        status : (str1, str2) => str1.localeCompare(str2),
    }
    

    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    
    let ticketsArray = ticketsInfoArr.reduce(((acc, currnent) =>{
        const [destination, price, status] = currnent.split('|');
        acc.push(new Ticket(destination, Number(price), status));
        return acc
    }),[])
    

    let output = ticketsArray.sort((t1, t2) => sorting[sortingCriteria](t1[sortingCriteria], t2[sortingCriteria]));
    


    return output;

}



solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');
