function readText(text){
    let index = 0;
    let name = text[index];
    index++;
    
    while(name !== "Stop"){
        console.log(name)
        name = text[index];
        index++
        
    }
    
}
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
