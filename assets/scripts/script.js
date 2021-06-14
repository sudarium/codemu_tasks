let inp = document.querySelector('.inp');
let btn = document.querySelectorAll('.btn');
for(let el of btn){
    el.addEventListener('click', checkBtn);
}

function checkBtn(){
    if(this.dataset.lock === 'lock'){
        inp.disabled = true;
    }
    else if(this.dataset.lock === 'unlock'){
        inp.disabled = false;
    }
}

