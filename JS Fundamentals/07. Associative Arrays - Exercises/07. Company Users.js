function solve(input) {

    let companyObj = {};

    input.forEach(line => {
        let [company, id] = line.split(" -> ");

        if (!Object.keys(companyObj).includes(company)) {
            companyObj[company] = [];
            if (!companyObj[company].includes(id)) {
                companyObj[company].push(id);
            }
        } else {
            if (!companyObj[company].includes(id)) {
                companyObj[company].push(id);
        }
    }
    });
    let sortedCompanies = [...Object.keys(companyObj)].sort((a, b) => a.localeCompare(b));
    let output = "";


    for (company of sortedCompanies) {
        output += company + "\n";
        for (id of companyObj[company]) {
            output += "-- " + id + "\n";
        }
    }
    console.log(output);

}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]

)