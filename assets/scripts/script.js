let in1 = document.querySelector('.text:nth-child(1)');
let in2 = document.querySelector('.text:nth-child(2)');
let in3 = document.querySelector('.text:nth-child(3)');


in1.addEventListener('blur', fun);
in2.addEventListener('blur', fun);
in3.addEventListener('blur', fun);


function fun(){
 this.value = this.value **2;    
}