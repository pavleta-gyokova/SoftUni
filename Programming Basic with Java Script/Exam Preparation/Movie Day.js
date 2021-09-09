function movieDays(shootTime,sceneNum,sceneTime){
    shootTime = Number(shootTime);
    sceneNum = Number(sceneNum);
    sceneTime = Number(sceneTime);
    let preparationTime = shootTime * 0.15;
    let sceneTotalTime = sceneTime * sceneNum;
    let lostTime = preparationTime + sceneTotalTime;
    if (shootTime > lostTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(shootTime - lostTime)} minutes left!`);
        
    } else if (shootTime < lostTime) {
        console.log(`Time is up! To complete the movie you need ${Math.round(lostTime - shootTime)} minutes.`)
        
    }
}
movieDays(60,15,3)