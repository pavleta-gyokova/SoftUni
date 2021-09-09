function solve(input) {
    let info = [...input];
    let initialPassword = info.shift();
    info.pop();
    let password = '';
    let tempPass = '';

    info.forEach((line) => {

        let [command, arg1, arg2] = line.split(' ');

        if (command === 'TakeOdd') {
            for (let i = 1; i < initialPassword.length; i += 2) {
                tempPass += initialPassword[i];

            }

            console.log(tempPass);
            password = tempPass;
        } else if (command === "Cut") {
            let index = Number(arg1);
            let length = Number(arg2);

            let substring = tempPass.substring(index, index + length);
            tempPass = tempPass.replace(substring, '');

            console.log(tempPass);
            password = tempPass;

        } else if (command === "Substitute") {
            while (tempPass.includes(arg1)) {
                tempPass = tempPass.replace(arg1, arg2)
            }

            if (password.includes(arg1)) {
                console.log(tempPass);
                password = tempPass;
            } else {
                console.log(`Nothing to replace!`);
            }
            // if (tempPass.includes(arg1)) {
            //     tempPass = tempPass.split(arg1).join(arg2);

            //     console.log(tempPass);
            //     password = tempPass;
            // } else {
            //     console.log(`Nothing to replace!`);
            // }
        }
    })

    console.log(`Your password is: ${password}`);

}
solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
])