/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    // Калькулятор

let persons = document.querySelectorAll('.counter-block-input')[0],
restDays = document.querySelectorAll('.counter-block-input')[1],
place = document.getElementById('select'),
totalValue = document.getElementById('total'),
personsSum = 0,
daysSum = 0,
total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function(){
  personsSum =+ this.value;
  total = (daysSum + personsSum)*4000;
  if(restDays.value == '') {
    total.value.innerHTML = 0;
  } else {
    totalValue.innerHTML = total; 
  }
});

restDays.addEventListener('change', function(){
  daysSum =+ this.value;
  total = (daysSum + personsSum)*4000;
  if(persons.value == '') {
    total.value.innerHTML = 0;
  } else {
    totalValue.innerHTML = total; 
  }
});

place.addEventListener('change', function() {
  if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
  } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
  }
});
};

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form(){
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
};

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
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
};

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


  function tabs(){
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
  };

  module.exports = tabs;
 

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

 // Делаем интерактивный таймер
 function timer(){ 
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
};

module.exports = timer;
 


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';
    let tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        calc = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");

    tabs();
    timer();
    form();
    modal();
    slider();
    calc();
});




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map