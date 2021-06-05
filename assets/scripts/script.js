let par = document.querySelector('.text');
let btn = document.querySelector('.btn');
let = inpVal = document.querySelectorAll('.inp');

btn.addEventListener('click', function(){
    let summ = 0;
for(let el of inpVal){
    summ += +el.value;
    console.log(summ)
}
    par.innerHTML = summ;
})