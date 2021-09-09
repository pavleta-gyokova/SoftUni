function lunchBreak(name,episodeTime,breakLunch){
    episodeTime = Number(episodeTime);
    breakLunch = Number(breakLunch);
    let lunchTime = breakLunch / 8;
    let relaxTime = breakLunch / 4;
    let timeLeft = lunchTime + relaxTime;
    let realTime = breakLunch - timeLeft
    if (episodeTime <= realTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(realTime - episodeTime)} minutes free time.`);
        
    } else if (episodeTime > realTime) {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeTime - realTime)} more minutes.`);
        
    }
}
lunchBreak("Teen Wolf",48,60)