let btn = document.querySelector('.btn');

let link = document.querySelector('.link');

let par = document.querySelector('.text');

btn.addEventListener('click', function(){
     par.innerHTML = link.href;
})