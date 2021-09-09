function operations(n1,n2,operationType){
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0
    if (operationType === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            console.log(`${n1} ${operationType} ${n2} = ${result} - even`);
            
        } else {
            console.log(`${n1} ${operationType} ${n2} = ${result} - odd`);
        }
        
    } else if (operationType === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
            console.log(`${n1} ${operationType} ${n2} = ${result} - even`);
            
        } else {
            console.log(`${n1} ${operationType} ${n2} = ${result} - odd`);
        }
        
    } else if (operationType === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
            console.log(`${n1} ${operationType} ${n2} = ${result} - even`);
            
        } else {
            console.log(`${n1} ${operationType} ${n2} = ${result} - odd`);
        }
        
    } else if (operationType === "/") {
        result = n1 / n2;
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`)
            
        } else {
            console.log(`${n1} ${operationType} ${n2} = ${result.toFixed(2)}`);
        }
        
    } else if (operationType === "%") {
        result = n1 % n2;
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`)
            
        } else {
            console.log(`${n1} ${operationType} ${n2} = ${result}`);
        }
        
    }
}
operations("10",
"0",
"%")






