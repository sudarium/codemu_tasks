let btn = document.querySelector('.www');
alert(btn.className);
btn.addEventListener('click', function(){
    btn.classList.toggle('www');
    alert(btn.className);
})
