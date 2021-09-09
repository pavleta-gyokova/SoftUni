function poolDay(people,fee,bedPerPrice,umbrellaPerPrice) {
    people = Number(people);
    fee = Number(fee);
    bedPerPrice = Number(bedPerPrice);
    umbrellaPerPrice = Number(umbrellaPerPrice);
    let totalFee = people * fee;
    let totalUmbrellas = Math.ceil(people / 2);
    let totalUmbrellaPrice = totalUmbrellas * umbrellaPerPrice;
    let totalBeds = Math.ceil(people * 0.75);
    let totalBedPrice = totalBeds * bedPerPrice;
    let totalSum = totalFee + totalUmbrellaPrice + totalBedPrice;
    console.log(`${totalSum.toFixed(2)} lv.`)


}
poolDay("21","5.50","4.40","6.20")