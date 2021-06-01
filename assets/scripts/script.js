let par1 = document.querySelector('.text:nth-child(1)');
let par2 = document.querySelector('.text:nth-child(2)');
let par3 = document.querySelector('.text:nth-child(3)');
let par4 = document.querySelector('.text:nth-child(4)');
let par5 = document.querySelector('.text:nth-child(5)');

par1.addEventListener('click', fun);
par2.addEventListener('click', fun);
par3.addEventListener('click', fun);
par4.addEventListener('click', fun);
par5.addEventListener('click', fun);

function fun(){
 this.innerHTML += '!'   
}