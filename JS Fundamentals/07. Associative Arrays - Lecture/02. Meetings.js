function solve(input){
    let meetingBook = [...input];
    let meetingObject = {}
    meetingBook.forEach(line => {
        let [day,name] = line.split(" ");
        if(meetingObject.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else{
            meetingObject[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        
    });
    Object.keys(meetingObject).forEach(key =>{
        console.log(`${key} -> ${meetingObject[key]}`)
    })

}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)