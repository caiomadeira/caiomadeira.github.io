//let stars = document.getElementById('stars');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    //stars.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 8 + 'px';
    header.style.top = value * 1.5 + 'px;'
})
