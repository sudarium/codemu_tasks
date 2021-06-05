let btn = document.querySelector('.btn');
btn.addEventListener('click', valuePlus);
function valuePlus(){
    if(this.innerHTML<10){
    this.innerHTML = +this.innerHTML + 1;
    console.log(this.innerHTML);
    }
    else{
        btn.removeEventListener('click', valuePlus);
    }
}