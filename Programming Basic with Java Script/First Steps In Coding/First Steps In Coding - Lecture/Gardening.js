function Gardening(arg){
    let area = Number(arg);
    let totalMonye = area * 7.61
    let discount = totalMonye * 0.18
    console.log(`The final price is: ${totalMonye - discount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
Gardening(550);