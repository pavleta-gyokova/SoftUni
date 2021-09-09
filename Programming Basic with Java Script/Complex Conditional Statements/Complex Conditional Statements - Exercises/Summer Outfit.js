function summerOutfit(degrese,timeOfDay){
    degrese = Number(degrese);
    let outfit;
    let shoes;
    switch(timeOfDay){
        case "Morning":
            if (degrese >= 10 && degrese <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers"                
            } else if (degrese <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
                
            } else if (degrese >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
                
            }
            break;
        case "Afternoon":
            if (degrese >= 10 && degrese <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins"                
            } else if (degrese <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
                
            } else if (degrese >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
                
            }
            break;
        case "Evening":
            if (degrese >= 10 && degrese <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins"                
            } else if (degrese <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
                
            } else if (degrese >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
                
            }
            break;              
    }
    console.log(`It's ${degrese} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(28,"Evening")

