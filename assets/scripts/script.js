let inp = document.querySelector('.inp');
inp.addEventListener('change', function(){
    if(inp.value.length > 5){
        inp.classList.add('coloredRed');
    }
    else if(inp.value.length < 5){
        inp.classList.add('coloredGreen');
    }
})