function walking(input){
    let index = 0;
    let steps = (input[index]);
    let goalStep = 10000;
    let stepsSum = 0;
    let stepsGoingHome = 0;
    while(stepsSum < goalStep){
        if(steps.toLocaleLowerCase() === "going home"){
            steps = (input[index + 1]);
            stepsGoingHome = Number(steps)
            stepsSum += stepsGoingHome
            break;
        }
            let currentSteps = Number(steps)
            stepsSum += currentSteps;
            index++;
            steps = (input[index]);

    }
    
    if (stepsSum >= goalStep){
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsSum - goalStep} steps over the goal!`);
    } else {
        console.log(`${goalStep - stepsSum} more steps to reach goal.`)

    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])





