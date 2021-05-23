let button1 = document.querySelector('.btn:nth-child(1)');
let button2 = document.querySelector('.btn:nth-child(2)');

let el1 = document.querySelector('.text:nth-child(1)');
let el2 = document.querySelector('.text:nth-child(2)');

button1.addEventListener('click', function() {
   alert(el1.innerHTML);
})

button2.addEventListener('click', function() {
    alert(el2.innerHTML);
 })