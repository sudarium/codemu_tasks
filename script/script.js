let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    if(inp.disabled){
        alert("inp is blocked");
    }else if(!inp.disabled){
        alert("inp isn \'t blocked");
    }
})