 let inp = document.querySelector('#elem');
 inp.addEventListener('input', function(){
     if(inp.value.length > 5){
         alert('you type more then 5 simbols')
     }
    })