function solve(match1Score, match2Score, match3Score) {
    let wins = 0;
    let draws = 0;
    let losses = 0;
    //изикваме функцията за всеки мач
    determineResult(match1Score);
    determineResult(match2Score);
    determineResult(match3Score);
    //тази функиция приема като един агрумент един мач '3:1' например и определя резултата
    function determineResult(matchScore) {
        let hostScoreMatch = Number(matchScore.charAt(0))
        let guestScoreMatch = Number(matchScore.charAt(2))
        if (hostScoreMatch > guestScoreMatch) {
            wins++;
        } else if (hostScoreMatch === guestScoreMatch) {
            draws++
        } else {
            losses++
        }
    }
    //print results
    console.log(`Team won ${wins} games.`)
    console.log(`Team lost ${losses} games.`)
    console.log(`Draw games: ${draws}`);
}
solve("3:1","0:2","0:0")