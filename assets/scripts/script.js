let btn_1 = document.querySelector('.btn:nth-child(1)');
console.log(btn_1);

let btn_2 = document.querySelector('.btn:nth-child(2)');
console.log(btn_2);

let img = document.querySelector('.image:nth-child(3)');
console.log(img);

btn_1.addEventListener('click', function(){
    img.src = 'assets/img/pic1.png'
})

btn_2.addEventListener('click', function(){
    img.src = 'assets/img/pic2.png'
})