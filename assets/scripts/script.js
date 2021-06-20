function isLeap(year){
    let date = new Date(year, 2, 0);

if (date.getDate() == 29) {
	console.log('високосный год');
} else {
	console.log('обычный год');
}
}
let sel = document.querySelector('#yr')
sel.addEventListener('change', function(){
    isLeap(this.value);
})



