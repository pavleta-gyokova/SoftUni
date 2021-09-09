function solve(input){

    input.sort(sort);
    console.log(input.join('\n'))
    

    function sort(a,b){
        if(a.lenght > b.lenght){
            return 1;
        } else if(a.lenght < b.lenght){
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }

}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"])