function DepositCalculator(arg1,arg2,arg3){
    let DepositSum = Number(arg1);
    let months = Number(arg2);
    let Percent = Number(arg3);
    let Percents = Percent / 100;
    

    console.log(DepositSum + months * ((DepositSum * Percents) / 12));
  

}
DepositCalculator("200","3","5.7")