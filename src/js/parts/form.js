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