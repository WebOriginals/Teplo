var swiperStock = new Swiper('.js--swiper-stock', {
    // pagination: '.swiper-pagination',
    // slidesPerView: 'auto',
    slidesPerView: 3,
    // paginationClickable: true,
    spaceBetween: 30, 
    // loop: true,
    prevButton: ".js--swiper-stock__prev",
    nextButton: ".js--swiper-stock__next",
    freeMode: false,
    breakpoints: {
        470: {
            // slidesPerView: 1,
            slidesPerView: "auto",
            spaceBetween: 10,
            freeMode: true,
        },
        767: {
            // slidesPerView: 1,
            slidesPerView: "auto",
            spaceBetween: 20,
            freeMode: true,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 20
        },
    },
});


$(window).resize(function () {
    stock_resize();
});

function stock_resize() {
    swiperStock.update(true);
}
$(document).ready(function () {
    stock_resize();
    jQuery(window).trigger('resize');
});