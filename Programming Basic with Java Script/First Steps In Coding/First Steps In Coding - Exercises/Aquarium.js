function Aquarium(arg1,arg2,arg3,arg4){
    let lenght = Number(arg1) * 0.1;
    let wide = Number(arg2) * 0.1;
    let height = Number(arg3) * 0.1;
    let percent = Number(arg4) * 0.01;
    let Volume = lenght * wide * height;
    console.log(Volume * (1 - percent));

}
Aquarium(85,75,47,17)