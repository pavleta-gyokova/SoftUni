function solve(match1Score, match2Score, match3Score) {
    let wins = 0;
    let draws = 0;
    let losses = 0;
    //check firstMatchResult
    let hostScoreMatch1 = Number(match1Score.charAt(0))
    let guestScoreMatch1 = Number(match1Score.charAt(2))
    if(hostScoreMatch1 > guestScoreMatch1){
        wins++;
    }else if(hostScoreMatch1 === guestScoreMatch1){
        draws++;
    }else {
        losses++;
    }
    //check secondMatchResult
    let hostScoreMatch2 = Number(match2Score.charAt(0))
    let guestScoreMatch2 = Number(match2Score.charAt(2))
    if(hostScoreMatch2 > guestScoreMatch2){
        wins++;
    }else if(hostScoreMatch2 === guestScoreMatch2){
        draws++;
    }else {
        losses++;
    }
    //check thirdMatchResult
    let hostScoreMatch3 = Number(match3Score.charAt(0))
    let guestScoreMatch3 = Number(match3Score.charAt(2))
    if(hostScoreMatch3 > guestScoreMatch3){
        wins++;
    }else if(hostScoreMatch3 === guestScoreMatch3){
        draws++;
    }else {
        losses++;
    }
    //print results
    console.log(`Team won ${wins} games.`)
    console.log(`Team lost ${losses} games.`)
    console.log(`Drawn games: ${draws}`);
}
solve("3:1","0:2","0:0")