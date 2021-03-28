$(function() {
    $('.hero__slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/icons/arrow-left.svg" alt="prev arrow" /></button>',
        nextArrow: '<button class="slick-arrow arrow-next"><img src="images/icons/arrow-right.svg" alt="next arrow" /></button>',
    });

    $('.service__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.service__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.service__tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return true;
    });

    $('.price__inner .tab1').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.price__inner').find('.tab-item1').removeClass('active-tab1').hide();
        $('.price__inner').find('.tab1').removeClass('active1');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab1').fadeIn();
        return true;
    });

    $('.about__slider_inner').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
    });


    $('a.btn__gallery').on('click', function(event) {
        event.preventDefault();

        var gallery = $(this).attr('href');

        $(gallery).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
    });


    $('.header__menu_burger').on('click',
        function() {
            $('.header__menu_list').slideToggle();
        });
});