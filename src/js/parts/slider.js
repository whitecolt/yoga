function slider() {
    // Сделаем слайдер

let slider = document.querySelectorAll('.slider'),
slides = document.querySelectorAll('.slider-item'),
dots = document.querySelectorAll('.dot'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.slider-dots');

// Зададим индекс, который будет показывать номер слайда, который сейчас отображается
let slideIndex = 0;

function showSlides(n){
  // скроем все слайды со страницы
 slides.forEach((item) => item.style.display = 'none'); 
  // выведем на страницу тот слайд, чей порядковый номер совпадает со slideIndex
  slides[n].style.display = 'flex';
  
  dots.forEach((item) => item.classList.remove('dot-active'));
  dots[n].classList.add('dot-active');
}

showSlides(slideIndex);

function changeSlides(n){
  slideIndex += n;

  if (slideIndex > slides.length-1){
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length-1;
  }
}

next.addEventListener('click', () => {
 changeSlides(1)
 showSlides(slideIndex);
})

prev.addEventListener('click', () => {
  changeSlides(-1)
  showSlides(slideIndex);
})

dotsWrap.addEventListener('click', (event) => {
for (let i = 0; i < dots.length; i++){
  if(event.target == dots[i]){
    showSlides(i);
  }
}   
});
};

module.exports = slider;