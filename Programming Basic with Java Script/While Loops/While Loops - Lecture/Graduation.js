function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    
    let currentgrade = 1;
    let lowgrade = 0;
    let aveScore = 0;
    let isExclude = false
    while(currentgrade <= 12){
        let grade = Number(input[index]);
        index++;
        if(grade < 4.00){
            lowgrade++
            if(lowgrade == 2){
                console.log(`${name} has been excluded at ${currentgrade} grade`)
                isExclude = true
                break;
            }
            continue
        }
        aveScore += grade
        currentgrade++

    }
    if(!isExclude){
    console.log(`${name} graduated. Average grade: ${(aveScore / 12).toFixed(2)}`)
    }

}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
