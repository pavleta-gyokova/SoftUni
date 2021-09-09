function gamerShop(args){

    let hearthstoneSales = 0;
    let forniteSales = 0;
    let overwatchSales = 0;
    let otherGameSales = 0;
    let totalGamesSoldCount = Number(args[0]);

    for (let index = 1; index < args.length; index++) {
        let currentGame = args[index];
//         •	Hearthstone
// •	Fornite
// •	Overwatch
// •	Others

        if (currentGame === "Hearthstone"){
            hearthstoneSales++;
        } else if (currentGame === "Fornite"){
            forniteSales++;
        } else if (currentGame === "Overwatch"){
            overwatchSales++;
        } else {
            otherGameSales++;
        }
    }
    let hearthStoneSalesPercentToTotal = ((hearthstoneSales / totalGamesSoldCount) * 100).toFixed(2);
    let forniteSalesPercentToTotal = ((forniteSales / totalGamesSoldCount) * 100).toFixed(2);
    let OverwatchSalesPercentToTotal = ((overwatchSales / totalGamesSoldCount) * 100).toFixed(2);
    let OtherGameshSalesPercentToTotal = ((otherGameSales / totalGamesSoldCount) * 100).toFixed(2);

    console.log(`Hearthstone - ${hearthStoneSalesPercentToTotal}%`);
    console.log(`Fornite - ${forniteSalesPercentToTotal}%`);
    console.log(`Overwatch - ${OverwatchSalesPercentToTotal}%`);
    console.log(`Others - ${OtherGameshSalesPercentToTotal}%`);

}
gamerShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2",
    ])