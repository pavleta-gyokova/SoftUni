function solve(input){
    let contactsAssArr = {}
     
    let contactArr = [...input];
    contactArr.forEach(line => {
        let [name,phone] = line.split(" ");
        contactsAssArr[name] = phone;
    })

   Object.keys(contactsAssArr).forEach(key =>{
       console.log(`${key} -> ${contactsAssArr[key]}`);
   })


}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)