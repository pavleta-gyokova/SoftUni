function salary(args) {
    let initialSalary = Number(args[1]);

    for (let index = 2; index < args.length; index++) {

        let currentTab = args[index];

        if (currentTab === "Facebook") {
            initialSalary -= 150;
        } else if (currentTab === "Instagram") {
            initialSalary -= 100;
        } else if (currentTab === "Reddit") {
            initialSalary -= 50;
        }


        if (initialSalary <= 0) {
            return console.log(`You have lost your salary.`);
        }

    }

    console.log(initialSalary.toFixed(0))


}

let test1 = ["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"];

let test2 = ["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]

let test3 = ["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]

salary(test3)







