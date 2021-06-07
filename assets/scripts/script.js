let elem = document.querySelector('#elem');

for(let el of elem.children){
    el.innerHTML += '!';
}