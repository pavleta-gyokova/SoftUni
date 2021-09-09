function solve (password){

    
  

    function lengthCheck(pass){
        let isEnough = false
        if(pass.length >= 6 && pass.length <= 10){
            isEnough = true;
        } else {
            console.log(`Password must be between 6 and 10 characters`)
        }
        return isEnough;
    }

    function isAlphabetical(pass){

        let isDigitOrNumber = false;
        
         
       for(char of pass){
        isDigitOrNumber = false;
        
        let numberValue = char.charCodeAt(0)

           if(numberValue >= 48 && numberValue <= 57){
            isDigitOrNumber = true;
               
             } else if (numberValue >= 87 && numberValue <= 122){
                isDigitOrNumber = true;
            } else if (numberValue >= 65 && numberValue <= 90){
                isDigitOrNumber = true;
            }
            if(isDigitOrNumber == false){
                console.log(`Password must consist only of letters and digits`);
                break;
            }
            
           
         }
        return isDigitOrNumber
    }
    function isDigitsAreEnoungh (pass){
        let isEnoughtDigits = false
        let digitCount = 0;
        for(char of pass){
            let numberValue = char.charCodeAt(0)
            
            if(numberValue >= 48 && numberValue <= 57){
                digitCount++
            }
        }
        if(digitCount >= 2){
            isEnoughtDigits = true;
        } else {
            console.log(`Password must have at least 2 digits`);
        }
        return isEnoughtDigits
    }

    let a = lengthCheck(password);
    let b = isAlphabetical(password)
    let v = isDigitsAreEnoungh(password)

    if(a && b && v){
        console.log(`Password is valid`);
    }




}

solve('Pa$s$s')