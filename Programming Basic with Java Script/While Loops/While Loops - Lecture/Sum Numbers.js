function sumNum(args){
    let index = 0;
    let Neededsum = Number(args[index]);
    index++
    let sum = 0;
    while(sum < Neededsum){
        let curretnt = Number(args[index]);
        index++
        sum += curretnt
    }
    console.log(sum)

}
sumNum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

