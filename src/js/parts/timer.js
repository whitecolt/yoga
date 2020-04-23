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
 
