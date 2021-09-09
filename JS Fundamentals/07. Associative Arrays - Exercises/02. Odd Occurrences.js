function solve(input){
    let elements = input.split(" ").map((x) => x.toLowerCase());
    let map = genarateMap(new Set(elements));
    elements.forEach(element =>{
        map.set(element,map.get(element) + 1);
    });
    let output = "";
    Array.from(map.entries()).forEach(kvpArr =>{
        let [key,value] = kvpArr;
        if(Number(value) % 2 !== 0){
            output += key + " ";
        }
    })
    console.log(output);

    function genarateMap(set){
        let map = new Map;
        set.forEach(element => {
            map.set(element,0)
        });
        return map
    }
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')