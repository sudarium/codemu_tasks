let inp = document.querySelector('.checkbox');
let btn = document.querySelectorAll('.btn');
for(let el of btn){
    el.addEventListener('click', func)
}

function func(){
    if(this.dataset.checked == 'checked'){
        inp.setAttribute('checked', 'checked');
    }else if(this.dataset.checked == 'unchecked'){
        inp.removeAttribute('checked');
    }
}
