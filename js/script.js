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
  let deadline = '2020-04-01';  


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
});





