let elem = document.querySelector('.btn');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
	if(event.type == 'dblclick'){
        elem.classList.add('clrRed');
    }else if(event.type == 'click' ){
        elem.classList.add('clrGreen')
    }
}