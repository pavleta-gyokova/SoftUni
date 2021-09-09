function tournamentOfChristmas(input){
    let index = 0;
    let daysOfTournament = Number(input[index]);
    index++;
    let money = 0;
    let totalWin = 0;
    let totalLose = 0;
    for(let i = 0; i < daysOfTournament; i++){
        let command = input[index];
        index++;
        let tempMoney = 0;
        let countWin = 0;
        let countLose = 0;
    while(command !== "Finish"){
        let sport = command;
        let score = input[index];
        index++
        if(score === "win"){
            tempMoney += 20;
            countWin++;
        } else{
            countLose++;
        }
        
        
    
        command = input[index];
        index++;
    }
    if(countWin > countLose){
        tempMoney *= 1.10;
        totalWin++
    } else {
         totalLose++
    }
    money += tempMoney;
   
}
    if(totalWin > totalLose){
        money *= 1.2;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
    }
}
tournamentOfChristmas([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ]
  )