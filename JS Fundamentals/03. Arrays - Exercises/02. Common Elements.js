function solve(array1,array2){


  for(let i = 0; i < array1.length; i++){
      let currentSymbol1 = array1[i];

      for(let j = 0; j < array2.length; j++){
          let currentSymbol2 = array2[j];

          if(currentSymbol1 === currentSymbol2){
              console.log(currentSymbol1);
          }
      }
  }
   
}
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

)