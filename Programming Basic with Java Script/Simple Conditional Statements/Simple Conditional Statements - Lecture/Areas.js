function Areas(arg1,arg2,arg3){
    let Type = arg1;
    if (Type === "square") {
        let a = Number(arg2);
        let output = (a * a).toFixed(3);
        console.log(output);
    } else if (Type === "rectangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        let output = (a * b).toFixed(3);
        console.log(output)
        
    } else if (Type === "circle") {
        let r = Number(arg2);
        let output = (Math.PI * r * r).toFixed(3)
        console.log(output)
    } else {
        let a = Number(arg2);
        let ha = Number(arg3);
        let output = ((a * ha) / 2).toFixed(3)
        console.log(output)
    }
}
Areas("rectangle",
"7","2.5")