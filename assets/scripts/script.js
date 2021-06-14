let inp = document.querySelector('#elem');
inp.addEventListener('blur', function(){
    let temp = inp.value.length;
    
    if(temp < inp.dataset.min || temp > inp.dataset.max){
    alert('количество введенных символов не попадает в этот диапазон');
    }
})