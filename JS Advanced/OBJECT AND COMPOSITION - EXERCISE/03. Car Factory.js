function solve(object) {



    let newObj = {
        model: "",
        engine: { power: "", volume: "" },
        carriage: { type: "", color: "" },
        wheel: []
    };
    newObj.model = object.model
    if (object.power >= 0 && object.power <= 90) {
        newObj.engine.power = 90;
        newObj.engine.volume = 1800;
    } else if (object.power <= 120) {
        newObj.engine.power = 120;
        newObj.engine.volume = 2400;
    } else if (object.power > 120) {
        newObj.engine.power = 200;
        newObj.engine.volume = 3500;
    }

    newObj.carriage.type = object.carriage;
    newObj.carriage.color = object.color;


    if (object.wheelsize % 2 == 0) {
        let newWheel = 2 * Math.floor(object.wheelsize / 2) - 1;
        newObj.wheel = [newWheel,newWheel,newWheel,newWheel];
    } else {
        newObj.wheel = [object.wheelsize,object.wheelsize,object.wheelsize,object.wheelsize];
    }

    return newObj;

}
solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)