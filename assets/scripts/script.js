let ul = document.querySelector('#elem');
ul.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        event.target.innerHTML += '!';
    }else if(event.target.tagName == 'UL'){
        event.target.innerHTML += '<li>text</li>';
    }
})