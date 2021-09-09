function tradeCommission(town,profit){
    profit = Number(profit);
    if (profit >= 0 && profit <= 500) {
        switch (town){
            case "Sofia":
                console.log((profit * 0.05).toFixed(2))
                break;
            case "Varna":
                console.log((profit * 0.045).toFixed(2))
                break;
            case "Plovdiv":
                console.log((profit * 0.055).toFixed(2))
                break;
            default:
                console.log("error");
                break;    
        }
        
    } else if (profit > 500 && profit <= 1000) {
        switch (town){
            case "Sofia":
                console.log((profit * 0.07).toFixed(2))
                break;
            case "Varna":
                console.log((profit * 0.075).toFixed(2))
                break;
            case "Plovdiv":
                console.log((profit * 0.08).toFixed(2))
                break;
            default:
                console.log("error");
                break;    
        }
        
    } else if (profit > 1000 && profit <= 10000) {
        switch (town){
            case "Sofia":
                console.log((profit * 0.08).toFixed(2))
                break;
            case "Varna":
                console.log((profit * 0.1).toFixed(2))
                break;
            case "Plovdiv":
                console.log((profit * 0.12).toFixed(2))
                break;
            default:
                console.log("error");
                break;    
        }
        
    } else if (profit > 10000) {
        switch (town){
            case "Sofia":
                console.log((profit * 0.12).toFixed(2))
                break;
            case "Varna":
                console.log((profit * 0.13).toFixed(2))
                break;
            case "Plovdiv":
                console.log((profit * 0.145).toFixed(2))
                break;
            default:
                console.log("error");
                break;
        }            
        
    } else if (profit < 0) {
        console.log("error");
        
    }
}
tradeCommission("Pesho",
"50")


