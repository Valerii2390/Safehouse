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

    $('.service__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.service__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.service__tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return true;
    });
});