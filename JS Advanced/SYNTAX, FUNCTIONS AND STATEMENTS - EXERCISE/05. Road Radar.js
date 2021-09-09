function solve(speed, area) {
    let speedLimit = 0;
    let speedDiference = 0


    switch (area) {
        case "motorway":
            speedLimit = 130;
            speedDiference = speed - speedLimit;
            if (speedDiference <= 0) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                if (speedDiference > 0 && speedDiference <= 20) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                } else if (speedDiference > 0 && speedDiference <= 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else if (speedDiference > 0 && speedDiference > 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
        case "interstate":
            speedLimit = 90;
            speedDiference = speed - speedLimit;

            if (speedDiference <= 0) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                if (speedDiference > 0 && speedDiference <= 20) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                } else if (speedDiference > 0 && speedDiference <= 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else if (speedDiference > 0 && speedDiference > 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
        case "city":
            speedLimit = 50;
            speedDiference = speed - speedLimit;

            if (speedDiference <= 0) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                if (speedDiference > 0 && speedDiference <= 20) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                } else if (speedDiference > 0 && speedDiference <= 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else if (speedDiference > 0 && speedDiference > 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
        case "residential":
            speedLimit = 20;
            speedDiference = speed - speedLimit;

            if (speedDiference <= 0) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                if (speedDiference > 0 && speedDiference <= 20) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                } else if (speedDiference > 0 && speedDiference <= 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else if (speedDiference > 0 && speedDiference > 40) {
                    console.log(`The speed is ${speedDiference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
    }

}
solve(40, 'city')