let inp = document.querySelector('.inp');
let par = document.querySelector('.text');
inp.addEventListener('change', function(){
    par.innerHTML = inp.value;
})