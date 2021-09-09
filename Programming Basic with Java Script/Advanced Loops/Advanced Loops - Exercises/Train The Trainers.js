function trainTheTrainer(input){
    let juryCount = Number(input[0]);
    let index = 1;
    let totalAverResult = 0;
    let presentationCount = 0;
    let presentationName = input[index];

    while(presentationName !== "Finish"){
        let totalJuryScore = 0;

        for(let jury = 1; jury <= juryCount; jury++){
            index++;
            totalJuryScore += Number(input[index]);
        }

        let average = totalJuryScore / juryCount;
        console.log(`${presentationName} - ${average.toFixed(2)}.`);

        totalAverResult += average;
        presentationCount++;

        index++;
        presentationName = input[index]
    }
    let totalAveScore = totalAverResult / presentationCount;
    console.log(`Student's final assessment is ${totalAveScore.toFixed(2)}.`)
}

(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
