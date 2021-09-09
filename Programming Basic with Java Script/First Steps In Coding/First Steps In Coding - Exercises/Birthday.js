function Birthday(arg){
    let Rent = Number(arg);
    let Cake = Rent * 0.2;
    let Drinks = Cake - (Cake * 0.45);
    let Animator = Rent / 3;
    console.log(Rent + Cake + Drinks + Animator);

}
Birthday(2250)