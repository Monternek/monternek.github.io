$(function () {
    $('.header__slider').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinity: true,
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

    $(function () {
        $("#slider-price").slider({
            range: true,
            min: 0,
            max: 9900,
            values: [500, 7000],
            slide: function (event, ui) {
                $('input[name="minPrice"]').val(ui.values[0]);
                $('input[name="maxPrice"]').val(ui.values[1]);
            }
        });
        $('input[name="minPrice"]').val(
            $("#slider-price").slider('values', 0));
        $('input[name="maxPrice"]').val(
            $("#slider-price").slider('values', 1));
    });


});