let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
btn.addEventListener('click', func);

function func(){
    let checkInp = inp.getAttribute('value');
    if(inp.value === checkInp){
        alert('Nothing chenged!');
    }
    else{
        alert("Somthign has changed");
    }
}