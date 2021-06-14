let el = document.querySelector('#elem');
el.addEventListener('click', calcPrice);
function calcPrice(){
    el.innerHTML += el.dataset.productPrice * el.dataset.productAmount
}