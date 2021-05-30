let elem = document.querySelector('#elem');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let mass = elem.className.split(' ');
    console.log(mass);
    
})