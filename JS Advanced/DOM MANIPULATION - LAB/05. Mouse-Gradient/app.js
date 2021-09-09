function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('click',function(e){
        console.log(e);
        let resultElememt = document.getElementById('result');
        let offset = e.offsetX;
        let width = e.currentTarget.offsetWidth;
        let percent = (offset / width) * 100;
        resultElememt.textContent = `${Math.floor(percent)}%`
    })
}