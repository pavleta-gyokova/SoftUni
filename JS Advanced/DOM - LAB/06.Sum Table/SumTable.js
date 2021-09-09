function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let index = 0;
    let sum = 0;
    let sumElement = document.getElementById('sum');
    for (row of rows) {
        let currentprice = row.children[1].textContent;
        if(index > 0){
            sum += Number(currentprice)
        }
        index++
    }
    
    sumElement.textContent = sum
}