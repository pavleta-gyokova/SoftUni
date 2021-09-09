function solve() {
    let result = [];
    let count = {};

    [...arguments].forEach(argument => {
        let type = typeof argument;
        result.push({ type, value: argument });
        if (!count[type]) {
            count[type] = 0
        }
        count[type]++
    })
    result.forEach(line => console.log(`${line.type}: ${line.value}`));
    let sort = Object.entries(count).sort((a, b) => b[1] - a[1]);
    sort.forEach(element => console.log(`${element[0]} = ${element[1]}`));
}

function solve2(...input) {
    Object.entries(
        input
            .reduce((previous, current) => {
                let type = typeof current;
                console.log(`${type}: ${current}`);
                if (!previous.hasOwnProperty(type)) {
                    previous[type] = 0
                }
                previous[type]++;
                return previous
            }, {})


    )
        .map(([type, count]) => `${type} = ${count}`)
        .forEach((el) => console.log(el))
}
solve('cat', 42, function () { console.log('Hello world!'); })
solve2('cat', 42, function () { console.log('Hello world!'); })