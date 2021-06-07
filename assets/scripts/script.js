let elDiv = document.querySelector('#elem');

elDiv.addEventListener('click', function(){
    console.log(elDiv.innerHTML)
    elDiv.innerHTML +=elDiv.dataset.text;
})
