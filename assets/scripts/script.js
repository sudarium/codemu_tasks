let inp = document.querySelectorAll('.inp');
for(let el of inp){
    el.addEventListener('blur', func);
}

function func() {
	this.value = Number(this.value) + 1;
}