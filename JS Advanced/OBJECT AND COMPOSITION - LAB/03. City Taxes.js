function cityTaxes(name, population, treasury) {

    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            return city.treasury += city.population * city.taxRate
        },

        applyGrowth: function (percent) {
            return city.population += city.population * percent / 100;
        },
        applyRecession: function (percent) {
            return city.treasury -= city.treasury * percent / 100;
        },
    }
    return city;


}
const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);



