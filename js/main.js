$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '.arrow-left',
    nextArrow: '.arrow-right',
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".header__slider").on('afterChange', function (event, slick, currentSlide) {
    $("#cp").text(currentSlide + 1);
  });




  $('.work-with-us__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '.arrow-left__slider-block',
    nextArrow: '.arrow-right__slider-block',
    responsive: [{
      breakpoint: 1530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    }, ]
  });

  $(".work-with-us__slider").on('afterChange', function (event, slick, currentSlide) {
    $("#cp-2").text(currentSlide + 1);
  });

  $('.work-with-us-buyer__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,


    arrows: false,

    responsive: [{
      breakpoint: 1250,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    }, ]
  });

  var lang = document.getElementById('lang');
  lang.onchange = function () {
    window.location = 'http://localhost:3000/' + lang.options[lang.options.selectedIndex].value + 'index.html'
  }



});