let inps = document.querySelectorAll('.inp');
let btn = document.querySelector('.btn');
let par = document.querySelector('.text');


btn.addEventListener('click', function(){
    let summ = 0;
    for(let el of inps){
        summ += +(el.value);
}
    par.innerHTML = summ;
})
