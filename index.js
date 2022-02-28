let menu = document.querySelector(".menu");
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.overlay__close')

menu.addEventListener('click', function(){
    overlay.classList.add('show');
})
close.addEventListener('click', function(){
    overlay.classList.remove('show');
})