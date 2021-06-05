let btn = document.querySelector('.btn');
let inp = document.querySelector('.inp');
console.log(inp.getAttribute('value'))

btn.addEventListener('click', func);
function func(){
    inp.value = 'type smb';
    console.log(inp.getAttribute('value'));
}