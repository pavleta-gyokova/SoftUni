function solve(input){
    let adressBook = {};
    input.forEach(line => {
        let [name,adress] = line.split(":");
        adressBook[name] = adress;
    });

   let sorted = Object.entries(adressBook);
   sorted.sort((a,b) => a[0].localeCompare(b[0]));

   sorted.forEach(line =>{
       console.log(`${line[0]} -> ${line[1]}`);
   })
}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)