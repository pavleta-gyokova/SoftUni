function cake(input){
    let index = 0;
    let wide = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let cakePieces = input[index];
    let totalCakeSize = wide * length;
    let cakeTook = 0;
    while(cakeTook < totalCakeSize){
        let currentPiese = Number(cakePieces);
        cakeTook += currentPiese;
        index++
        cakePieces = input[index];
        if(cakePieces === "STOP"){
            break;
        }
    }
    if(totalCakeSize >= cakeTook){
        console.log(`${totalCakeSize - cakeTook} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${cakeTook - totalCakeSize} pieces more.`)
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

