let sel = document.querySelector('#weekSelect');
sel.addEventListener('change', function(){
    if(sel.value < 6){
        console.log('Day is not a holiday');
    }else if(sel.value < 7){ 
        console.log('Day is a holiday');
    }
})