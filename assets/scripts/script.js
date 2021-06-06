let btn = document.querySelectorAll('.btn');
let par = document.querySelector('.par');
for(let el of btn){
    el.addEventListener('click', funcSwitch);
}
function funcSwitch(){
if(this.getAttribute('data-cross') === 'cross_btn'){
    funcCross();
}
else if(this.getAttribute('data-bold') === 'bold_btn'){
    funcBold();
}
else if(this.getAttribute('data-colored') === 'colored_btn'){
    funcColored();
}

}
function funcCross(){
   par.classList.toggle('cross'); 
}
function funcBold(){
    par.classList.toggle('bold'); 
}
function funcColored(){
    par.classList.toggle('colored');
}