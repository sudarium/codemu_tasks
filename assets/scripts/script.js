let el = document.querySelector('#elem');
let temp = el.nextElementSibling.innerHTML;
console.log(el.nextElementSibling.innerHTML);
console.log(el.previousElementSibling.innerHTML);

el.nextElementSibling.innerHTML = el.previousElementSibling.innerHTML;
el.previousElementSibling.innerHTML = temp;
console.log(el.nextElementSibling.innerHTML);
console.log(el.previousElementSibling.innerHTML);


