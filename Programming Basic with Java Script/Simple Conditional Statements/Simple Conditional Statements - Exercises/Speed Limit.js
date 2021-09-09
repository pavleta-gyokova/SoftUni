function SpeedLimit(arg1){
    let Speed = Number(arg1);
    if (Speed <= 10) {
        console.log(`slow`)
        
    } else if (Speed <= 50) {
        console.log(`average`);
        
    } else if (Speed <= 150) {
        console.log(`fast`);
        
    } else if (Speed <= 1000) {
        console.log(`ultra fast`);
        
    } else {
        console.log(`extremely fast`);
    }
}
SpeedLimit(3500)