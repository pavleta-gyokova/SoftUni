function numberPyramid(number){
    number = Number(number[0]);
    let currentNumber = 1;
    let isFinished = false;


     for(let rows = 1; rows <= number; rows++){
         let currentRow = "";
         for(let columns = 1; columns <= rows; columns++){
            if(currentNumber > number){
                isFinished = true;
                break;
            }
            currentRow += `${currentNumber} `;
            currentNumber++;
         }
         if(isFinished){
             break;
         }
         console.log(currentRow)
     }
}
numberPyramid(["15"])