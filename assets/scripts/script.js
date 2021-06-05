let link = document.querySelector('.link');
link.addEventListener('click', func)
    this.innerHTML += this.href;


function func(){
    this.innerHTML += this.href;
    this.removeEventListener('click', func)
}