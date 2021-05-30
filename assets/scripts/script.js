let elem = document.querySelector('#elem');
elem.addEventListener('blur', function(){
    this.value = '2'
});

elem.addEventListener('focus', function(){
    this.value = '1'
});


