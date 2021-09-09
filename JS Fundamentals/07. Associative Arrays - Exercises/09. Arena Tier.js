function solve(input) {
    let arenaObj = {};
    let arenaInfo = [...input];
    arenaInfo.pop()
    arenaInfo.forEach(line => {
        if (!line.includes("vs")) {
            let [name, skill, points] = line.split(" -> ");
            points = Number(points);
            if (!Object.keys(arenaObj).includes(name)) {
                arenaObj[name] = {};
                arenaObj[name][skill] = points;
            } else {
                if (!Object.keys(arenaObj[name]).includes(skill)) {
                    arenaObj[name][skill] = points;
                } else {
                    if ((arenaObj[name][skill]) < points) {
                        arenaObj[name][skill] = points
                    }
                }
            }


        } else {
            let [gladiator1, gladiator2] = line.split(" vs ");
            if (Object.keys(arenaObj).includes(gladiator1) && Object.keys(arenaObj).includes(gladiator2)) {
                let gladiator1Skills = [...Object.keys(arenaObj[gladiator1])];
                let gladiator2Skills = [...Object.keys(arenaObj[gladiator2])];
                let filteredArr = gladiator1Skills.filter((commonSkill) => gladiator2Skills.includes(commonSkill));
                if (filteredArr.length > 0) {
                    let gladiator1TotalPoints = 0;
                    let gladiator2TotalPoints = 0;

                    [...Object.values(arenaObj[gladiator1])].map((points) => gladiator1TotalPoints += points);


                    [...Object.values(arenaObj[gladiator2])].map((points) => gladiator2TotalPoints += points);

                    if (gladiator1TotalPoints > gladiator2TotalPoints) {
                        delete arenaObj[gladiator2];
                    } else {
                        delete arenaObj[gladiator1];
                    }

                }


            }
        }
    });



    let tier = Object.entries(arenaObj)
    let array = []
    for (let line of tier) {
        let name = line[0]
        let power = Object.entries(line[1])
        let sum = power.map(a => a[1]).reduce((a, b) => a + b)
        array.push([name, power, sum])
    }
    array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))
    for (let part of array) {
        console.log(`${part[0]}: ${part[2]} skill`);
        part[1]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
    }



}
solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])