function solve(string1,string2, string3){
    let string1Length = string1.length;
    let string2Length = string2.length;
    let string3Length = string3.length;
    let sumLength = string1Length + string2Length + string3Length;
    console.log(sumLength);
    let averageLength = Math.floor(sumLength / 3);
    console.log(averageLength);
}
solve('pasta', '5', '22.3')