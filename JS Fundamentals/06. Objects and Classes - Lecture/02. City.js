function solve(name,area,population,country, postCode){
    let CityInfo = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postCode
    }

    for(let keys in CityInfo){
        console.log(`${keys} -> ${CityInfo[keys]}`)
    }
}
solve("Sofia"," 492", "1238438", "Bulgaria", "1000"
)