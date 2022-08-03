$(document).ready(function () {
    $('.slider01').bxSlider({
        mode: 'fade',
        pager: true,
        // pagerSelector: ".key_txt",
        controls: false,
        auto: true,
        speed: 1500,
        pause: 5000,
    });

    $('.work_slider').bxSlider({
        // mode: 'fade',
        // slideWidth: 360,
        // slideMargin: 60,
        minSlides: 2,
        maxSlides: 5,
        pager: true,
        controls: false,
        auto: true,
        speed: 1500,
        pause: 5000,
        moveSlides: 1,
        infiniteLoop: true
    });

});