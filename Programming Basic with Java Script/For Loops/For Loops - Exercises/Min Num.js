function minNumbers(numbers) {

    let minNumber = 0

    for (let index = 1; index < numbers.length; index++) {
        let currentNumber = Number(numbers[index]);

        if (index === 1) {
            minNumber = currentNumber
        } else {
            if (currentNumber < minNumber) {
                minNumber = currentNumber
            }
        }
    }
    console.log(minNumber);
}
minNumbers(["4",
    "45",
    "-20",
    "7",
    "99"])
