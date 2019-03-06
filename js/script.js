jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

if (window.innerWidth < 766) {
  $('.menu__link').click(function() {
    $('.menu__list').slideToggle();
    $('.menu').removeClass('menu--opened');
  })
}

//Scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 50) {
    $(".header-menu").addClass('header-menu--scroll');
  } else {
    $(".header-menu").removeClass('header-menu--scroll');
  };
});

});