function RadiansToDegreese(arg){
    let Radians = Number(arg);
    let Degreese = Radians * 180 / Math.PI;
    console.log(Degreese.toFixed(0));
}
RadiansToDegreese(3.1416)