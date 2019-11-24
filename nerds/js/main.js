$(function () {
    $('.header__slider').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 8000,
        arrows: false,
    });


    $(".nav-item").click(function () {
        $(this).toggleClass("active-nav");
    });

    $(".category-none").click(function () {
        $(this).toggleClass("category-active");
    });

    $(".triangle-none").click(function () {
        $(this).toggleClass("triangle-active");
    });

    $(".page-numbers__item").click(function () {
        $(this).toggleClass("active-page");
    });

    $(".nav-burger__burger").click(function () {
        $(".nav-burger__wrapper").toggleClass("nav-burger__wrapper-active");
    });


    $(".nav-burger__burger").click(function () {
        $(this).toggleClass("span-burger-active");
    });


    

});