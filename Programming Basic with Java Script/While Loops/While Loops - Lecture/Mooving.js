function mooving(input){
    let index = 0;
    let wide = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let boxes = input[index];
    let boxTotal = 0;
    let totalSpace = wide * length * height;
    let noSpace = false;
    while(boxes !== "Done"){
        let currentBox = Number(boxes);
        boxTotal += currentBox;
        index++
        boxes = input[index];
        if(totalSpace - boxTotal < 0){
            console.log(`No more free space! You need ${boxTotal - totalSpace} Cubic meters more.`)
            noSpace = true
            break;
        }
        
    }
    if(!noSpace){
        console.log(`${totalSpace - boxTotal} Cubic meters left.`)
    }    

    
}
mooving(["10",
"1",
"2",
"4",
"6",
"Done"])



