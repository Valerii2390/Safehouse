$(function() {
    $('.hero__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/icons/arrow-left.svg" alt="prev arrow" /></button>',
        nextArrow: '<button class="slick-arrow arrow-next"><img src="images/icons/arrow-right.svg" alt="next arrow" /></button>',
    });
});