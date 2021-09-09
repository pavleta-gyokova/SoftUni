function gamerShop(args) {

    let totalGamesSold = Number(args[0])

    let gamesSoldCount = {
        Hearthstone: 0,
        Fornite: 0,
        Overwatch: 0,
        Others: 0
    }

    for(let index = 1; index < args.length; index++){
        let currentGame = args[index];

        if(Object.keys(gamesSoldCount).includes(currentGame)){
            gamesSoldCount[currentGame]++
        }else{
            gamesSoldCount["Others"]++
        }
    }

    let gameNames = Object.keys(gamesSoldCount);

    for(let index = 0; index < gameNames.length; index++){
        let currentGame = gameNames[index]
        let currentPecrentToTotal = ((gamesSoldCount[currentGame] / totalGamesSold) * 100).toFixed(2)
        console.log(`${currentGame} - ${currentPecrentToTotal}%`)
    }

}
gamerShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2",
])