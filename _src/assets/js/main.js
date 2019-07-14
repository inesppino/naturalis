'use strict';

let slides = document.querySelectorAll('.carrousel .slide');
let currentSlide = 0;

function playSlideshow() {
    setInterval(nextSlide,3000);
}

function nextSlide() {
    goToSlide(currentSlide+1);
}

function goToSlide(n) {
    slides[currentSlide].classList.remove('showing');
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].classList.add('showing');
}

playSlideshow();

function addClassLit(){
    const lithica = document.getElementById('li-cant');
    lithica.classList.toggle('content-lithica');
    lithica.classList.toggle('lithica');
}

function addClassLif(){
    const life = document.getElementById('li-nat');
    life.classList.toggle('content-natura');
    life.classList.toggle('natura');
}