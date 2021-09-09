function smallShop2(product,town,quantity){
    quantity = Number(quantity);
    let price = 0;
     if (town === "Sofia") {
         switch (product) {
             case "coffee":
                 price = 0.5;
                 break;
             case "water":
                 price = 0.8;
                 break;
              case "beer":
                  price = 1.2;
                  break;
               case "sweets":
                   price = 1.45;
                   break;
               case "peanuts":
                   price = 1.60;
                   break;              
         }
     } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee":
                price = 0.4;
                break;
            case "water":
                price = 0.7;
                break;
             case "beer":
                 price = 1.15;
                 break;
              case "sweets":
                  price = 1.30;
                  break;
              case "peanuts":
                  price = 1.50;
                  break;       
        } 
     } else if (town === "Varna") {
        switch (product) {
            case "coffee":
                price = 0.45;
                break;
            case "water":
                price = 0.7;
                break;
             case "beer":
                 price = 1.1;
                 break;
              case "sweets":
                  price = 1.35;
                  break;
              case "peanuts":
                  price = 1.55;
                  break;       
        }
     }
console.log(quantity * price)    
}
smallShop2("coffee",
"Varna",
"2")
