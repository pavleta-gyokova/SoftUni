function clock(){
    for(let index = 0; index < 24; index++){
        for(let minutes = 0; minutes < 60; minutes++){
            console.log(`${index}:${minutes}`)
        }
    }
}
clock()