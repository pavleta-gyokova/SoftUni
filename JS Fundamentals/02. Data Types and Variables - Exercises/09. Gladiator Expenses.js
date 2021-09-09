function gladiator(lostFights,hemlPrice,swordPrice,shieldPrice,armorPrice){
    let brokenHelms = Math.floor(lostFights / 2);
    let brokenSwords = Math.floor(lostFights/ 3);
    let brokenShield = Math.floor(lostFights / 6);
    let brokenArmor = Math.floor(brokenShield / 2);
    let totalExpenses = (brokenHelms * hemlPrice) + (brokenSwords * swordPrice) + (brokenShield * shieldPrice) + (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)

}
gladiator(7,
    2,
    3,
    4,
    5
    
    )