function maxNumber(arr){
    let result = []
    for(let index = 0; index < arr.length; index++){
            let element = arr[index];
            isBigger = true;
            for(let i = index + 1; i < arr.length; i++){
                let nextElemet = arr[i];
                if(element <= nextElemet){
                    isBigger = false;
                    break;
                }
            }
            if(isBigger){
                result.push(element)
            }
    }
    console.log(result.join(' '))
}
maxNumber([14, 24, 3, 19, 15, 17])