function solve(input){
    let wordArr = [...input];
    let wordsToFind = wordArr.shift().split(" ");
    let obj = {};
     wordsToFind.forEach(element => {
         obj[element] = 0;
     });

     wordArr.forEach(word =>{
         if(obj.hasOwnProperty(word)){
             obj[word] ++
         }
         
     })
     for(let key of Object.keys(obj).sort((a,b) => obj[b] - obj[a])){
         console.log(`${key} - ${obj[key]}`);
     }
    //  let sorted = Object.entries(obj);
    //  sorted.sort((a,b) => {
    //      let valueA = a[1];
    //      let valueB = b[1];
    //      return valueB - valueA
    //  })
    //  sorted.forEach(line =>{
    //      console.log(`${line[0]} - ${line[1]}`);
    //  })
     
}
solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task','sentence','sentence'
    ])