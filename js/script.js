window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');


  // Скроем весь контент табов на странице, оставив только первый таб
  function hideContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }
  }

  hideContent(1);

  // Напишем функцию, которая будет показывать какой-то необходимый нам таб
  function showContent(b) {
    tabContent[b].style.display = 'flex';
  }

  // Используем делегирование для того, чтобы при клике на название таба нам показывался его контент
  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideContent(0);
          showContent(i);
          break;
        }
      }
    }
  });

});