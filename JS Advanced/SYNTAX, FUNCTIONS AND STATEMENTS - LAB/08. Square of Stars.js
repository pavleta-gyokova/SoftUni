function solve(num) {

    if (num === undefined) {
        num = 5;
        for (let i = 1; i <= num; i++) {
            let result = "";

            for (let m = 1; m <= num; m++) {
                result += `* `
            }

            console.log(result)
        }


    } else {

        for (let i = 1; i <= num; i++) {
            let result = "";

            for (let m = 1; m <= num; m++) {
                result += `* `
            }

            console.log(result)
        }
    }



}
solve()