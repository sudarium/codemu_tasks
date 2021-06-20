let btn = document.querySelector('.btn');
let inp = document.querySelector('.text');
let radio = document.querySelectorAll('input[type = "radio"]');

btn.addEventListener('click', function(){
    for(let el of radio){
        if(el.checked){
            inp.innerHTML = el.value;
        }
    }
})
