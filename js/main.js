$(document).ready(function() {

  $('.fashionSliderContainer').slick({
       infinite:true,
       slidesToShow: 3,
       slidesToScroll: 3,
       prevArrow:  $('.fashion-slick-prev'),
       nextArrow: $('.fashion-slick-next'),
  });

  $('.graphicSliderContainer').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.graphic-slick-prev'),
    nextArrow: $('.graphic-slick-next'),
  });

  $('.illustrationSliderContainer').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll : 3,
    prevArrow: $('.illustration-slick-prev'),
    nextArrow: $('.illustration-slick-next'),
  });

  $('.dropdown').sticky({
    topSpacing: 0
  });
  
});