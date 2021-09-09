function solve(input,criteria){

    let sortedFun = {
        asc: function (arr){
            return arr.sort((a,b)=> a - b);
        },
        desc:function(arr){
            return arr.sort((a,b)=> b - a);
        }
    }

    let func = sortedFun[criteria];
    return func(input);
}