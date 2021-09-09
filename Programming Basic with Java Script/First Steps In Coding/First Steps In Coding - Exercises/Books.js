function Books(arg1,arg2,arg3){
    let PageNum = Number(arg1);
    let PageNumH = Number(arg2);
    let Days = Number (arg3);

    console.log ((PageNum / PageNumH) / Days);

}
Books(212,20,2)