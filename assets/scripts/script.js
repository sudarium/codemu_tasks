let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    this.value = Number(this.value) + 1;
    console.log(this.value);
});