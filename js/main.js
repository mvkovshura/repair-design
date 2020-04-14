/* document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal'); */
  /* создаем переменную по типу const тк на постоянно придется вызывать данную переменную те она не будет меняться мы один раз запишем в нее наше модальное окно и больше перезаписывать не будем, называем model тк переменная отвечает на вопрос что это? и обращаемся к элементу и находим его среди всех элементов документа и при помощи функции querySelector указываем какой конкретно элемент нас интересует - modal   */
  /* модальное окно будут вызывать кнопки которые имеют специальный data атрибут data-toggle это некий переключатель который должен вызывать модальное окно, задача найти все элементы которые имеют такой data-toggle */
/*   const modalBtn = document.querySelectorAll('[data-toggle=modal]'); */
  /* создаем еще переменную которая будет называться modalBtn - кнопка которая будет вызывать модальное окно и во всем документе с помощью queryselectorall ищем все элементы которые имеют специальный data атрибут data-toggle=modal */
  /* добавляем атрибут data-toggle=modal в некобходимые кнопки,  в итоге формируется список из элементов которые принадлежат одной переменной и в этом случае нам нужно запустить цикл который будет перебирать все кнопки с атрибутом data-toggle=modal   */
/*   const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
 */
/* }); */
/* прежде чем выполнять какие-то манипуляции на странице нужно убедиться что все элементы форм, все теги, так называемое дом дерево готово к работе */


$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () { 
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev')
  var bullets = $('.swiper-pagination')
  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

/* валидация формы */
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email ",
        email: "Введите в формате: name@domain.com"
      }
    }
  });
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"});

  /* валидация формы */
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // правило-объект (блок)
      userNameFooter: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      // строчное правило
      userPhoneFooter: "required",
      // правило-объект (блок)
      userQuestion: "required"
    }, //сообщения
    messages: {
      userNameFooter: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhoneFooter: "Телефон обязателен",
      userQuestion: {
        required: "Обязательно напишите ваш вопрос"
      }
    }
  });
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"});

   /* валидация формы */
   $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // правило-объект (блок)
      userNameControl: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      // строчное правило
      userPhoneControl: "required"
    }, //сообщения
    messages: {
      userNameControl: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhoneControl: "Телефон обязателен",
      userQuestion: {
        required: "Обязательно напишите ваш вопрос"
      }
    }
  });
  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"});
  

});