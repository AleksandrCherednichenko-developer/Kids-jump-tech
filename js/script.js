$(document).ready(function() {
  $('.header__burger-btn, .header__burger-menu-btn, .header__burger-close-btn').click(function(event) {
    $('.header__burger-btn, .header__burger, .header__burger-close-btn').toggleClass('active')
  })
});

$('.slider__items').slick({
   slidesToShow: 1,
   slidesToScroll: 4,
   dots: false,
   infinite: false, 
   variableWidth: true,
   centerMode: true,
   focusOnSelect: true,
 });