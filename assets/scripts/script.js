let par = document.querySelector('.text');
let btn = document.querySelector('.btn');
let input = document.querySelector('input');

btn.addEventListener('click', function(){
   par.innerHTML = input.value; 
})