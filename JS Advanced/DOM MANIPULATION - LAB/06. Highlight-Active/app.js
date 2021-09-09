function focus() {
    let inputs = document.querySelectorAll('input[type="text"]');
    Array.from(inputs).forEach((x)=>{
        x.addEventListener('focus',function(e){
            e.currentTarget.parentElement.classList.add('focused');
        })
        x.addEventListener('blur',function(e){
            e.currentTarget.parentElement.classList.remove('focused');
        })
    })
    
}