$(function(){
  $('.select-style').styler();
  $('.top-slider__inner').slick({
    prevArrow:'<button class="slick-prev" type="submit"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="slick-next" type="submit"><img src="images/icons/arrow-right.svg" alt=""></button>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});