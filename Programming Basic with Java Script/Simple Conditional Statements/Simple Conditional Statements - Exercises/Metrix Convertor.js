function MetrixConvertor(arg1,arg2,arg3){
let Num = Number(arg1);
FistMetrix = arg2;
SecondsMetrix = arg3;
if (FistMetrix === "cm") {
    Num = Num * 10;
} else if (FistMetrix === "m") {
    Num = Num * 1000;
} 
       
if (SecondsMetrix === "cm") {
    Num = Num / 10
    
} else if (SecondsMetrix === "m") {
    Num = Num / 1000;
}
console.log(Num.toFixed(3))
}
MetrixConvertor("45", "cm", "mm")