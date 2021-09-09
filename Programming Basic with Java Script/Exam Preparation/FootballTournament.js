function footballTournament(args){
    let winsCount = 0;
    let drawsCount = 0;
    let losesCount = 0;
    let nameOfTeam = args[0];
    let totalGamesPlayed = Number(args[1]);
    for (let index = 2; index < args.length; index++){
        currentGame = args[index];
        
        if (currentGame === "W"){
            winsCount++;
        } else if (currentGame === "D") {
            drawsCount++;
        } else if (currentGame === "L") {
            losesCount++
        }
    }
        let totalWinsPoints = winsCount * 3;
        let totalDrawsPooints = drawsCount * 1;
        let totalPoints = totalDrawsPooints + totalWinsPoints;
        let winRate = ((winsCount / totalGamesPlayed)* 100).toFixed(2);
        if (totalGamesPlayed <= 0){
            console.log(`${nameOfTeam} hasn't played any games during this season.`);
        } else {
        console.log(`${nameOfTeam} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${winsCount}`);
        console.log(`## D: ${drawsCount}`);
        console.log(`## L: ${losesCount}`);
        console.log(`Win rate: ${winRate}%`)
        }

}
footballTournament(["Chelsea","0"])