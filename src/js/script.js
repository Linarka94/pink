// slideshow

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');

function nextSlide() {
    goToSlide(currentSlide+1);
};

function previousSlide() {
    goToSlide(currentSlide-1);
};

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide slide--show';
};

next.onclick = function() {
    nextSlide();
};

previous.onclick = function() {
    previousSlide();
};

// burger-menu button

let burgerMenuButton = document.querySelector('.burger-menu');
let burgerMenu = document.querySelector('.burger-menu--line');
let burgerMenuOpen = document.querySelector('.mobile-nav');


burgerMenuButton.onclick = function() {
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuOpen.classList.toggle('mobile-nav--show');
}

