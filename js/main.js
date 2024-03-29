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

  


  $('.sublicense-companys__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: '.arrow-left__companys',
    nextArrow: '.arrow-right__companys',
  });

  $(".sublicense-companys__slider").on('afterChange', function (event, slick, currentSlide) {
    $("#cp-3").text(currentSlide + 1);
  });




  $( ".burger-absolute" ).click(function() {
    $( ".nav-burder-display__sections" ).toggleClass( "active-3" );
  });

  $( ".burger-absolute" ).click(function() {
    $( ".nav-burger" ).toggleClass( "active" );
  });


  


  


  $('.work-with-us__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '.arrow-left__slider-block',
    nextArrow: '.arrow-right__slider-block',
    autoplay: false,
    autoplaySpeed: 3000,
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
    autoplaySpeed: 4000,


    arrows: false,

    responsive: [{
      breakpoint: 1528,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      }
    }, ]
  });
});
