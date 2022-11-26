var btn = document.querySelector('#primeiro');
var container = document.querySelector('.pri');


btn.addEventListener('click', function(){

if(container.style.display === 'block') {
    container.style.display = 'none';
}else{
    container.style.display = 'block';
}

});

/*
var btndois = document.querySelector('#abrdois');
var containerdois = document.querySelector('.limpnotebook');


btndois.addEventListener('click', function(){

if(containerdois.style.display === 'block') {
    containerdois.style.display = 'none';
}else{
    containerdois.style.display = 'block';
}

});*/