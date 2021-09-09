function Architect (arg1,arg2){
    let name = arg1;
    let projects = Number(arg2);
    console.log(`The architect ${name} will need ${projects * 3} hours to complete ${projects} project/s.`)

}
Architect("George","4")