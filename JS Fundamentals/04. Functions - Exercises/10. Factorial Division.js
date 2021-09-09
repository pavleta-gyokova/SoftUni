function solve(firstNumber,secondNumber){
        let firstFactoriel = factoriel(firstNumber);
        let secondFactoriel = factoriel(secondNumber);

    function factoriel(n){
       let fact = 1;
       for(let i = n; i > 1; i--){
           fact *= i;
           
       }
       return fact
    }

    
        let result = firstFactoriel / secondFactoriel;
        
        console.log(result.toFixed(2))



}
solve(6,2)