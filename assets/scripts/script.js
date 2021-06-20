 let inp1 = document.querySelector('#elem1');
 inp1.addEventListener('input', function(){
    if(inp1.value.length > 1){
        inp1.nextElementSibling.focus();
    }
 })
let inp2 = document.querySelector('#elem2');
inp2.addEventListener('input', function(){
    if(inp2.value.length >1){
        inp2.blur();
    }
})

