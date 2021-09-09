function gymnastics(country,play){
    let hardness
    let performance
    switch(country) {
        case "Russia":
            if (play === "ribbon") {
                hardness = 9.100;
                performance = 9.400;
                
            } else if (play === "hoop") {
                hardness = 9.300;
                performance = 9.800;
                
            } else if (play === "rope") {
                hardness = 9.600;
                performance = 9.000;
                
            }
            break;
        case "Bulgaria":
            if (play === "ribbon") {
                hardness = 9.600;
                performance = 9.400;
                
            } else if (play === "hoop") {
                hardness = 9.550;
                performance = 9.750;
                
            } else if (play === "rope") {
                hardness = 9.500;
                performance = 9.400;
                
            }
            break;
        case "Italy":
            if (play === "ribbon") {
                hardness = 9.200;
                performance = 9.500;
                
            } else if (play === "hoop") {
                hardness = 9.450;
                performance = 9.350;
                
            } else if (play === "rope") {
                hardness = 9.700;
                performance = 9.150;
                
            }
            break;     

    }
 
    let totalScore = hardness + performance;
    let pointsLeft = 20 - totalScore;
    let percentLeft = (pointsLeft / 20) * 100;
    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${play}.`);
    console.log(`${percentLeft.toFixed(2)}%`);

}
gymnastics("Italy","hoop")

