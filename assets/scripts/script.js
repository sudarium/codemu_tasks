let element = document.querySelectorAll('.div');
for(let el of element){
    el.addEventListener('click', func)
}

function func(){
    this.innerHTML += this.dataset.num;
}