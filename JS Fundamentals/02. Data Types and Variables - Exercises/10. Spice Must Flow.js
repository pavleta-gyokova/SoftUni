function spice(startingYeald){

    let days = 0;
    let collectedSpice = 0;

    while(startingYeald >= 100){

        collectedSpice += (startingYeald - 26);
        days++;
        startingYeald -= 10;
    }
    collectedSpice -= 26;
    console.log(days);
    console.log(Math.max(collectedSpice, 0));
}
spice(111)