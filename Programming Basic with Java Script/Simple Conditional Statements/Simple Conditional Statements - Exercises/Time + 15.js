function Time15(arg1,arg2){
    let hours = Number(arg1);
    let minutes = Number(arg2);
    Newminutes = Number
    Newhour = Number
    if (minutes < 45) {
        Newminutes = 15 + minutes;
        Newhour = hours;
        
    } else {
        Newminutes = (minutes + 15) % 60;
        Newhour = hours + 1;
        
    }
    if (Newhour > 23) {
        Newhour = 0
        
    }
    if (Newminutes < 10) {
        console.log(`${Newhour}:0${Newminutes}`)

        
    } else {
        console.log(`${Newhour}:${Newminutes}`)
    }
    

}
Time15(12,49)
