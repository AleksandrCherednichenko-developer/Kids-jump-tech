// слайдер игр основной
$(document).ready(function(){
  $('.slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 4,
    dots: false,
    infinite: false, 
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
  });
});

// отклик кнопки бургер меню
$(document).ready(function() {
  $('.header__burger-btn, .header__burger-close-btn').click(function(event) {
    $('.header__burger-btn, .header__burger, .header__burger-close-btn').toggleClass('active')
  })
});

// обновление страници при сужении
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false);
  }, 100);
});

// счетчик чисел в секции advantages
var $status = $('.advantages__items-info');
var $slickElement = $('.advantages__items');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

// слайдер секции advantages
$('.advantages__items').slick({
  centerMode: true,
  focusOnSelect: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: false,
  variableWidth: true,
  mobileFirst: true,
  responsive: [{
    breakpoint: 768,
    settings: 'unslick'
  }]
});