let inp = document.querySelector('#elem');
inp.addEventListener('blur', func);
function func(){
    if(inp.value.length !== Number(inp.dataset.length)){
    alert("количество введенных символов не совпадает с заданным")
}
}