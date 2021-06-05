let par = document.querySelectorAll('.par');
for(let el of par){
    el.addEventListener('click', func);
}

function func(){
    this.innerHTML += '!';
    this.removeEventListener('click', func) 
}
