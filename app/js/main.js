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
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});