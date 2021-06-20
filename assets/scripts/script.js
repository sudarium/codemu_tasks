let inp = document.querySelector('.inp');
let par = document.querySelector('.par');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    if(inp.checked){
        par.innerHTML = 'Hi';
    }
    else if(!inp.checked){
        par.innerHTML = 'Bye'
    }
})