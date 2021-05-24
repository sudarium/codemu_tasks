let btn = document.querySelector('.btn');
let link = document.querySelector('a');

btn.addEventListener('click', function(){
    link.innerHTML = link.innerHTML + '(' + link.href + ')';
})