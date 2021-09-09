function shopping(budget,videoCardNum,processorNum,ramNum){
    budget = Number(budget);
    videoCardNum = Number(videoCardNum);
    processorNum = Number(processorNum);
    ramNum = Number(ramNum);
    let videoCardPrice = videoCardNum * 250;
    let processorPrice = processorNum * (videoCardPrice * 0.35);
    let ramPrice = ramNum * (videoCardPrice * 0.1);
    let totalExpenses = videoCardPrice + processorPrice + ramPrice;
    if (videoCardNum > processorNum) {
        totalExpenses = totalExpenses * 0.85;
        
    }
    if (budget >= totalExpenses) {
        console.log(`You have ${(budget - totalExpenses).toFixed(2)} leva left!`)
        
    } else if (budget < totalExpenses) {
        console.log(`Not enough money! You need ${(totalExpenses - budget).toFixed(2)} leva more!`);

        
    }
    
}
shopping("900","2","1","3")