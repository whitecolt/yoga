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