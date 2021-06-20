let inp = document.querySelector('#elem');
let par = document.querySelector('.text');
inp.addEventListener('input', func);

function func(){
let inpValue = inp.value.length;
const valInpConst = 5;
if(inpValue <=5){
    console.log(`You can also type ${valInpConst - inpValue} simbols`)
}else if(inpValue > 5){
    par.innerHTML = `text length exceeded by ${inpValue - valInpConst} characters`;
}
}
