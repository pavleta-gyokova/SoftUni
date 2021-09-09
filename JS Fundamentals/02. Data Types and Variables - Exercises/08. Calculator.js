function calculators(arg1,arg2,arg3){
    let together = `${arg1}${arg2}${arg3}`;
   
    console.log((eval(together)).toFixed(2));
}
calculators(5,
    '+',
    10
    )