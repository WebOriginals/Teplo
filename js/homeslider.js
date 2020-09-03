var swiperStart22 = new Swiper('.js--swiper-22', {
    // pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    // paginationClickable: true,
    spaceBetween: 0,
    loop: true,
    prevButton: ".js--swiper-22__prev",
    nextButton: ".js--swiper-22__next",
});
// $(document).resize(function () {
//   swiperStart22.update(true);
// }); 

var swiperStart33 = new Swiper('.js--swiper-33', {
    // pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    // paginationClickable: true,
    spaceBetween: 0,
    loop: true,
    // initialSlide: 1,
});
// $(document).resize(function () {
//   swiperStart33.update(true);
// }); 
swiperStart22.params.control = swiperStart33;
swiperStart33.params.control = swiperStart22;

$(window).resize(function () {
    super_resize();
});

// $(window).on("resize",function () {
//     super_resize();
// });

function super_resize() { 
    swiperStart22.update(true);
    swiperStart33.update(true);
}
$(document).ready(function () {
    super_resize();
    jQuery(window).trigger('resize');
});