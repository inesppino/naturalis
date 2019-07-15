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

function showImg(place){
  const selectedPlace = document.getElementById(place);
  selectedPlace.classList.remove('mapa-detail');
  if( place === 'map-viv-det'){
    selectedPlace.classList.add('map-viv');
  } else {
    selectedPlace.classList.add('map-pal');
  }
}

function hideImg(place){
  const selectedPlace = document.getElementById(place);
  selectedPlace.classList.add('mapa-detail');
  if( place === 'map-viv-det'){
    selectedPlace.classList.remove('map-viv');
  } else {
    selectedPlace.classList.remove('map-pal');
  }
}

function playGif() {
  const gifImg = document.querySelector('.img-gif');
  gifImg.style.opacity = 1;
}

function stopGif() {
  const gifImg = document.querySelector('.img-gif');
  gifImg.style.opacity = 0;
}

let pasarela = document.querySelectorAll('.carrousel-pasarela .slide-p');
let currentPasarela = 0;

function playPasarelaSlide() {
  setInterval(nextPasarelaSlide,2000);
}

function nextPasarelaSlide() {
  goToASlide(currentPasarela+1);
}

function goToASlide(n) {
  pasarela[currentPasarela].classList.remove('showing');
  currentPasarela = (n+pasarela.length)%pasarela.length;
  pasarela[currentPasarela].classList.add('showing');
}

playPasarelaSlide();