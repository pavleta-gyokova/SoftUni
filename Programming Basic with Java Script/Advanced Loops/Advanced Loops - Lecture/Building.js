function bulding(input){
    let floor = Number(input[0]);
    let apartment = Number(input[1]);
    for(let f = floor; f > 0; f--){
        let result = "";
        for(let a = 0; a < apartment; a++ ){
            if(floor == f){
                result += `L${f}${a} `;
            } else if(f % 2 == 0){
                result += `O${f}${a} `;
            } else {
                result += `A${f}${a} `;
            }
        }
        console.log(result)
    }
}
bulding(["6", "4"])