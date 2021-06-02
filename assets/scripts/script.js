let paragraphs = document.querySelectorAll('.text');


let btn = document.querySelector('.btn');


btn.addEventListener('click', function(){
for(let i=0; i<paragraphs.length;i++){
    paragraphs[i].innerHTML += [i+1]; 
}
})