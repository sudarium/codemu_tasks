let elem1 = document.querySelector('.num:nth-child(1)');
let elem2 = document.querySelector('.num:nth-child(3)');

let sum = document.querySelector('.btn');

sum.addEventListener('click', func);

function func() {
    alert(+(elem1.innerHTML) + +(elem2.innerHTML))
};

