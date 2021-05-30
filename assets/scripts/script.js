let input_1 = document.querySelector('.text:nth-child(1)')
console.log(input_1);
let input_2 = document.querySelector('.text:nth-child(2)')
console.log(input_2);

let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    input_2.value = Number(input_1.value) ** 2;
})