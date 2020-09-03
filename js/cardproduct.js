$('.bblock__select').selectric();

$('.js-card-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: true,
    asNavFor: '.js-card-2'
});
$('.js-card-2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-card-1',
    // centerMode: true,
    focusOnSelect: true
});