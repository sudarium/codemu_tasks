let button = document.querySelector('.btn');
let text = document.querySelector('.text');

button.addEventListener('click', function(){
    text.innerHTML = (text.innerHTML)**2;
})