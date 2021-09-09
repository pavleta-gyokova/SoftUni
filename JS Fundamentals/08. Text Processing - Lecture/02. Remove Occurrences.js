function solve(wordToRemove, text) {
    
   while(text.indexOf(wordToRemove) > -1){
       text = text.replace(wordToRemove,'');
   }
    console.log(text);

}
solve('ice',
    'kicegiciceeb')