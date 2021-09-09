function histogram(numbers){
 
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for(let index = 1; index < numbers.length; index++){
        let currentNumber = numbers[index];
        if (currentNumber < 200) {
            p1++
        } else if (currentNumber >= 200 && currentNumber < 400) {
            p2++
        } else if (currentNumber >= 400 && currentNumber < 600) {
            p3++
        } else if (currentNumber >= 600 && currentNumber < 800) {
            p4++
        } else {
            p5++
        }
    }
    let total = numbers[0];
    let p1ToTotal = (p1 / total * 100).toFixed(2);
    let p2ToToTal = (p2 / total * 100).toFixed(2);
    let p3ToTotal = (p3 / total * 100).toFixed(2);
    let p4ToTotal = (p4 / total * 100).toFixed(2);
    let p5ToTotal = (p5 / total * 100).toFixed(2);

    let percents = [p1ToTotal, p2ToToTal, p3ToTotal, p4ToTotal, p5ToTotal]

    for(let i = 0; i < percents.length; i++){
        console.log(`${percents[i]}%`)
    }


}
histogram(["3",
"1","2","999"])

