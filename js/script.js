window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');


  // Скроем весь контент табов на странице, оставив только первый таб
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }
  }

  hideTabContent(1);

  // Напишем функцию, которая будет показывать какой-то необходимый нам таб
  function showTabContent(b) {
    tabContent[b].style.display = 'flex';
  }

  // Используем делегирование для того, чтобы при клике на название таба нам показывался его контент
  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target) {
      for (let i = 0; i < tab.length; i++) {
        if (tab[i] == target) {
          hideTabContent(0);
          showTabContent(i);
        }
      }
    }
  });

  // Делаем интерактивный таймер


  //  Установим дату дедлайна
  let deadline = '2020-05-01';  


  // получим время, оставшееся до дедлайна
  function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(((t/1000) % 60)),
        minutes = Math.floor((t/(1000*60)) % 60),
        hours = Math.floor(t/(1000*60*60));

// вернем объект, чтобы данными можно было пользоваться вне функции
    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
    
  }


// напишем функцию, которая получает элементы со страницы
 function setClock(id, endtime){
  let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);
// напишем функцию, которая будет получать значения таймера в реальном времени
    function updateClock(){
      let t = getTimeRemaining(endtime);
      
      if (t.total <= 0) {
        t.hours = 0;
        t.minutes = 0;
        t.seconds = 0;
      }
// напишем функцию, которая будет добавлять 0 к числу, если оно меньше 10
      function addZero(num){
        if(num<10){
          return "0" + num
        } else return num;
      }
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);


      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
 };
 setClock('timer', deadline);


// Добавим модальное окно

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function(){
    overlay.style.display = 'none';
    more.classList.remove('.more-splash');
    document.body.style.overflow = 'visible';
  })


  // Добавим отправку формы из модального окна на сервер

  let message = {
    loading: "Загрузка",
    success: "Спасибо, мы скоро с вами свяжемся",
    failure: "Что-то пошло не так"
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

      form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php')
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        let obj = {};
        formData.forEach((item,index) => {
          obj[index] = item;
        });
        let json = JSON.stringify(obj);
        request.send(json); 

        request.addEventListener('readystatechange', function(){
            if(request.readyState <4){
              statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
              statusMessage.innerHTML = message.success;
            } else {
              statusMessage.innerHTML = message.failure;
            }
            for (let i = 0; i < input.length; i++){
              input[i].value = '';
            }  
        });
      })

      // Добавим отправку данных из формы обратной связи на сервер

        // Добавим отправку данных из формы обратной связи на сервер

        let contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input');


    contactForm.addEventListener('submit', function(event){
      statusMessage.style.color = "white";
      event.preventDefault();
      contactForm.appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      let formData = new FormData(contactForm);
      request.send(formData);

      request.addEventListener('readystatechange', function(){
        if(request.readyState < 4 ){
          statusMessage.innerHTML = message.loading
        }
        else if(request.readyState == 4 && request.status == 200){
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
        for(let i = 0; i<contactInput.length; i++){
          contactInput[i].value = '';
        }
      });
    });

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
   
});


