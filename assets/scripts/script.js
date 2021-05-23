let elem = document.querySelector('#elem');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);


function func1() {
	alert('1');
}

function func2() {
	alert('2');
}

function func3() {
	alert('3');
}