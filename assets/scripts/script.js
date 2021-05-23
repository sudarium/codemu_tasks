let btn = document.querySelector('.btn');
let input = document.querySelector('input');

btn.addEventListener('click', function(){
    console.log(input.type)
    input.type = 'submit'
    console.log(input.type)
})