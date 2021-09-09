function solve(input) {

    let obj = {

    };

    input.forEach(line => {
        let [country, town, price] = line.split(" > ");
        price = Number(price);



        if (!Object.keys(obj).includes(country)) {
            obj[country] = {};
            if (!Object.keys(obj[country]).includes(town)) {
                obj[country][town] = price;
            }

        } else {
            if (!Object.keys(obj[country]).includes(town)) {
                obj[country][town] = price;
            } else {
                if ((obj[country][town]) > price) {
                    obj[country][town] = price;
                }
            }
        }

    });

    let sortedCountries = [...Object.keys(obj)].sort((a, b) => a.localeCompare(b));
    let output = "";
    for (country of sortedCountries) {
        output += country + " -> ";
        let sortedPrices = [...Object.keys(obj[country])].sort((a,b) => travelCost(a,b,obj,country));
        for(let town of sortedPrices){
            output += `${town} -> ${obj[country][town]} `;
        }
        output += "\n";
    }
    console.log(output);

    function travelCost(town1,town2,destination,country){
        let priceOne = destination[country][town1];
        let priceTwo = destination[country][town2];
        return priceOne - priceTwo;
    }
    

}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)