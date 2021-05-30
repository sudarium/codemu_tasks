let massInp = document.querySelectorAll('.inp');
let btn = document.querySelector('.btn');
let par = document.querySelector('.text');

function getNum(){
    for(let i=0; i<massInp.length; i++){
        massInp[i].value = prompt();
    }
}

sum = 0;
function average(){
    for(let i=0; i<massInp.length; i++){
        sum += +massInp[i].value ;
        
    }
}
getNum();
average();
btn.addEventListener('click', function(){
    
    par.innerHTML = sum / 2;
})






