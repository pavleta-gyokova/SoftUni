function solve(input){

    
    input.forEach(line =>{

       let info = line.split(' | ');
       let townInfo = {
           town : info[0],
           latitude : (Number(info[1])).toFixed(2) + "",
           longitude : (Number(info[2])).toFixed(2) + "",
       }
       console.log(townInfo);
    })
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)