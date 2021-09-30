$(function () {
    
$('.header__list-item.dropdown').click(function() {
  $(this).toggleClass('active');
})
$('.information__slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 700,

});
$('.reviews__inner').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  dots: true,
  prevArrow: '<button type="button" class="reviews__arrow left"><img src="./images/arrow-left.svg" alt="" class="reviews__arrow-img"></button>',
  nextArrow: '<button type="button" class="reviews__arrow right"><img src="./images/arrow-right.svg" alt="" class="reviews__arrow-img"></button> ',
  responsive: [
    {
      breakpoint: 1190,
      settings: {
       
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    
  ]

});


  
$('.header__menu-burger').click(function() {
  $(this).toggleClass('active');
  $('.header__menu-list').toggleClass('active');
})

})
