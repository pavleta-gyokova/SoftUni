function solve(input){
    let copy = input.slice()
    let train = copy[0].split(' '). map(strignToNumber);
    let maxCapasity = Number(copy[1]);
    let commands = copy.slice(2);
    for(let command of commands){
        let commandInfo = command.split(' ')

        if(commandInfo.length === 2){
            
            let wagon = Number(commandInfo[1]);
            train.push(wagon);

        } else {
            let passenger = Number (commandInfo[0]);

            for(let wagon in train){
                let currentPassengers = train[wagon];
                if((passenger + currentPassengers) <= maxCapasity){
                    train[wagon] += passenger;
                    break;
                }
            }
        }
    }

    console.log(train.join(' '))
    
    function strignToNumber(element){
        return Number(element);
    }




}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)