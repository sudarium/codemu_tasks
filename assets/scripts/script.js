let btn = document.querySelector('.btn');
let elem = document.querySelector('#elem');
btn.addEventListener('click', function(){
    elem.className = 'aaa';
    alert(elem.className);
})
