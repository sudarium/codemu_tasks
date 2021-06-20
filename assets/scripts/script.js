let btn = document.querySelector('.btn');
let par = document.querySelector('.text');
let sel = document.querySelector('#select');

sel.addEventListener('change', function(){
    btn.addEventListener('click', function(){
        par.innerHTML = sel.value;
    })
});
