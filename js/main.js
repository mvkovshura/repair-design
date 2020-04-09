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
});