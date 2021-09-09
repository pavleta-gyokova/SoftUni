function smallShop(product,town,quantity){
    quantity = Number(quantity);
    let price = 0;
    if (product === "coffee") {
        if (town === "Sofia") {
            price = 0.5;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Plovdiv") {
            price = 0.4;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Varna") {
            price = 0.45;
            let totalPrice = quantity * price;
            console.log(totalPrice);
        }
        } else if (product === "water") {
            if (town === "Sofia") {
            price = 0.8;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
            } else if (town === "Plovdiv") {
            price = 0.7;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
            } else if (town === "Varna") {
            price = 0.7;
            let totalPrice = quantity * price;
            console.log(totalPrice);
        }
        
    } else if (product === "beer") {
        if (town === "Sofia") {
            price = 1.2;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Plovdiv") {
            price = 1.15;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Varna") {
            price = 1.10;
            let totalPrice = quantity * price;
            console.log(totalPrice);
        }
        
    } else if (product === "sweets") {
        if (town === "Sofia") {
            price = 1.45;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Plovdiv") {
            price = 1.30;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Varna") {
            price = 1.35;
            let totalPrice = quantity * price;
            console.log(totalPrice);
        }    
        
    } else if (product === "peanuts") {
        if (town === "Sofia") {
            price = 1.60;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Plovdiv") {
            price = 1.50;
            let totalPrice = quantity * price;
            console.log(totalPrice);
            
        } else if (town === "Varna") {
            price = 1.55;
            let totalPrice = quantity * price;
            console.log(totalPrice);
        }    
        
    }

}
smallShop("sweets",
"Sofia",
"2.23")






