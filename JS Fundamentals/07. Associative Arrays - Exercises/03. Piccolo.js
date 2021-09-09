function solve(input) {
    let parkingLot = [];
    let carArr = [...input];
    
    carArr.forEach(line =>{
        let [direction,LicencePlate] = line.split(", ");
        if(direction === "IN" && !parkingLot.includes(LicencePlate)){
            parkingLot.push(LicencePlate);
        } else if(direction === "OUT" && parkingLot.includes(LicencePlate)){
            parkingLot = parkingLot.filter(lPl => lPl != LicencePlate);
        }
    });
    
        
    if(parkingLot.length > 0){
        console.log(parkingLot.sort((a,b) => a.localeCompare(b)).join("\n"))
    } else {
        console.log(`Parking Lot is Empty`);
    }
    
}
solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])