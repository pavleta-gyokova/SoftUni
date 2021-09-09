function calculator(first,second,operator){
    let operation = null;
    
    switch(operator){
        case "multiply":
            operation = (a, b) => a * b;
            break;
        case "divide" :
            operation = (a,b) => a / b;
            break;
        case "add":
            operation = (a,b) => a + b;
            break;
        case "subtract":
            operation = (a,b) => a - b;
            break;      

    }

    let result = operation(first, second);
    console.log(result)
}
calculator(5,5,"add")
