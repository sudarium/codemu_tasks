let elem_p1 = document.querySelector('.text');
let elem_p2 = document.querySelector('.text:nth-child(2)');
let elem_p3 = document.querySelector('.text:nth-child(3)');

elem_p1.addEventListener('click', function(){
    elem_p1.innerHTML = '1'; 
})

elem_p2.addEventListener('click', function(){
    elem_p2.innerHTML = '2'; 
})

elem_p3.addEventListener('click', function(){
    elem_p3.innerHTML = '3'; 
})
