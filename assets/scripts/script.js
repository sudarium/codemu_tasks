let btn = document.querySelector('.btn');
let input_1 = document.querySelector('.inp:nth-child(1)');
let input_2 = document.querySelector('.inp:nth-child(2)');

input_1.value = prompt();
input_2.value = prompt();

btn.addEventListener('click', function(){
    let temp = (input_1.value);
    input_1.value = input_2.value;
    input_2.value = temp;
})