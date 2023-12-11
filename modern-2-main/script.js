// Получаем элементы DOM
let menu = document.getElementById('modal');
let menuOpen = document.getElementById('menu');
let menuClose = document.getElementById('close');


// Обработчик события для открытия модального окна
menuOpen.onclick = function () {
  // Устанавливаем стили для отображения модального окна
  menu.style.display = "flex";
  menu.style.zIndex = 1;
  
  // Добавляем класс 'show', который запускает анимацию появления
  menu.classList.add('show');
};

// Обработчик события для закрытия модального окна
menuClose.onclick = function () {
  // Удаляем класс 'show', чтобы скрыть модальное окно с анимацией
  menu.classList.remove('show');
};

$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#topNubex').fadeIn();
    } else {
    $('#topNubex').fadeOut();
    }
    });
    $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
    });