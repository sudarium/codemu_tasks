let button1 = document.querySelector('.btn');
console.log(button1);
let button2 = document.querySelector('.btn:nth-child(3)');
console.log(button2)
let elem = document.querySelector('.text');

button1.addEventListener('click', function() {
    elem.innerHTML = 'Hello';
    alert(elem.innerHTML);    
})

button2.addEventListener('click', function() {
    elem.innerHTML = 'Bye!';
    alert(elem.innerHTML);    
})

