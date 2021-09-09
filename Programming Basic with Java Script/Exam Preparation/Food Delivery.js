function FoodDelivery(arg1,arg2,arg3){
    let Chicken = Number(arg1);
    let Fish = Number(arg2);
    let Vegan = Number(arg3);
    let ChickenPrice = Chicken * 10.35;
    let FishPrice = Fish * 12.40;
    let VeganPrice = Vegan * 8.15;
    let SumPrice = ChickenPrice + FishPrice + VeganPrice;
    let Dessert = SumPrice * 0.2;
    let Total = (SumPrice + Dessert + 2.50).toFixed(2)
    console.log(`Total: `, Total);
}
FoodDelivery(2,4,3)