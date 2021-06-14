let area = document.querySelector('#elem');
let par = document.querySelector('.par');

area.addEventListener('blur', function(){
    par.innerHTML = area.value; 
})