    // var swiperStart22 = new Swiper('.js--swiper-22', {
    //   // pagination: '.swiper-pagination',
    //   slidesPerView: 'auto',
    //   // paginationClickable: true,
    //   spaceBetween: 0,
    //   loop: true,
    //   prevButton: ".js--swiper-22__prev",
    //   nextButton: ".js--swiper-22__next", 
    // });
    // // $(document).resize(function () {
    // //   swiperStart22.update(true);
    // // }); 

    // var swiperStart33 = new Swiper('.js--swiper-33', {
    //   // pagination: '.swiper-pagination',
    //   slidesPerView: 'auto',
    //   // paginationClickable: true,
    //   spaceBetween: 0,
    //   loop: true,
    //   // initialSlide: 1,
    // });
    // // $(document).resize(function () {
    // //   swiperStart33.update(true);
    // // }); 
    // swiperStart22.params.control = swiperStart33;
    // swiperStart33.params.control = swiperStart22;
// var window.swiperStart22 = 0;
// var window.swiperStart33 = 0;
$(document).ready(function(){
    jQuery(function($){
      $(".js--phone").mask("+7 (999) 999-99-99");
    });

    $(window).scroll(function () {
      var navAll = $(".nav-all");
      var navAllHeight = $(".nav-all").height();
      var navTopHeight = $(".nav-top").height();
      
      if ($(this).scrollTop() > navTopHeight) {
        navAll.css("height", navAllHeight);
        $(".nav-all").addClass("nav-all-fixed");
        $(".search").addClass("search--fix-menu");
      } else {
        $(".nav-all").removeClass("nav-all-fixed");
        $(".search").removeClass("search--fix-menu");
        navAll.removeAttr("style");
      }
    });
    $(window).on("resize",function () {
      jQuery(window).trigger('scroll');
    });


    var swiperLogo = new Swiper('.js--swiper-logo', {
      // pagination: '.swiper-pagination',
      slidesPerView: 6,
      // paginationClickable: true,
      spaceBetween: 30,
      loop: true,
      // initialSlide: 1,
      prevButton: ".js--swiper-logo__prev",
      nextButton: ".js--swiper-logo__next", 
      breakpoints: {
        // when window width is <= 320px
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 10
        // },
        // when window width is <= 480px
        470: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        575: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1199: {
          slidesPerView: 5,
        }
      }
    });

    $(document).resize(function () { // document wtf ???
      swiperLogo.update(true);
    });



    var swiperCard = new Swiper('.js--swiper-card', {
      // pagination: '.swiper-pagination',
      slidesPerView: 4,
      // paginationClickable: true,
      spaceBetween: 30,
      loop: true,
      // initialSlide: 1,
      prevButton: ".js--swiper-card__prev",
      nextButton: ".js--swiper-card__next", 
      breakpoints: {
        // 480: {
        //   slidesPerView: 1,
        //   // spaceBetween: 20
        // },
        767: {
          slidesPerView: 2,
          // spaceBetween: 20
        },
        991: {
          slidesPerView: 3,
          // spaceBetween: 20
        },
      },
      
    });

    $(document).resize(function () {
        swiperCard.update(true);
    });
    // swiperLogo.update(true);


    // $('.js--slick-1').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   draggable: false,
    //   // adaptiveHeight: true,
    //   // centerMode: true,
    //   asNavFor: '.js--slick-1-preview'
    // });

    // $('.js--slick-1-preview').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   asNavFor: '.js--slick-1',
    //   // dots: true,
    //   // centerMode: true,
    //   focusOnSelect: true,  
    //   arrows: false,
    //   // spaceBetween: 30 
    //     responsive: [
    //       {
    //         breakpoint: 470,
    //         settings: {
    //           slidesToShow: 3,
    //         }
    //       },
    //     ]     
    // });


    jQuery(window).trigger('resize');

    $(".catalog__item").mouseenter(function () {
      // $(this).children(".catalog__img-item");
      // var tped = $(this).find(".catalog__img-item").innerHeight();
      $(this).addClass("catalog__item--hover");
      tped = $(this).find(".catalog__img-item").innerHeight();
      aed = tped*(-1);
      console.log(1);
      $(this).find(".catalog__effect").css("top", aed );
      // .css("background-color", "red")
      // $('.sub-menu').removeClass('sub--close');
      // $('.sub-menu').removeAttr('style');
    });


    $(".catalog__item").mouseleave(function () {
      console.log(2);
      $(this).find(".catalog__effect").css("top", 0 );
      $(this).removeClass("catalog__item--hover");
    });


// 

    // $(".cat-pg__item").mouseenter(function (e) {
    //     e.preventDefault();
    //     var cbg = $(this).innerHeight();
    //     cbg = cbg + 2;
    //     // $(".cat-pg__item").innerHeight();
    //     $(this).parent(".cat-pg__item-wrap").css("height", cbg);
    //     console.log('height'+cbg);
    //     console.log('каталог приход');
    // });
    
    
    // $(".cat-pg__item").mouseleave(function (e) {
    //   e.preventDefault();
    //   $(this).parent(".cat-pg__item-wrap").removeAttr('style');
    //   // $('.sub-menu').removeAttr('style');
      
    //   console.log('каталог уход');
    // });

    if (!Modernizr.touch) {
        console.log("touch not-supported");

        $(".cat-pg__item").mouseenter(function (e) {
            e.preventDefault();
            var cbg = $(this).innerHeight();
            cbg = cbg + 2;
            // $(".cat-pg__item").innerHeight();
            $(this).parent(".cat-pg__item-wrap").css("height", cbg);
            console.log('height'+cbg);
            console.log('каталог приход');
        });
        
        $(".cat-pg__item").mouseleave(function (e) {
          e.preventDefault();
          $(this).parent(".cat-pg__item-wrap").removeAttr('style');
          // $('.sub-menu').removeAttr('style');
          
          console.log('каталог уход');
        });
 
    } else {
        console.log("touch supported");
        // $('.cat-pg__item').each(function(i,elem) {
        //   aaa = elem;
        //   console.log(i);
        //   console.log(elem);
        //   console.log(elem.height);
        //   // $(this).innerHeight();
        //   // hhh = aaa.innerHeight();
        //   // console.log(hhh);
        // });
        $('.cat-pg__item').each(function(i,elem) {
          if ($(this).parent(".cat-pg__item-wrap") ) {
            // hhhWrap = $(this).parent(".cat-pg__item-wrap").innerHeight();
            hhhWrap = $(this).innerHeight();
            $(this).parent(".cat-pg__item-wrap")
            console.log(hhhWrap);
            $(this).parent(".cat-pg__item-wrap").css("height", hhhWrap + 2 );
            // return false;
          } else {
            // alert(i + ': ' + $(elem).text());
          }
        });
    }
// 

    $(".js--search").click(function (e) {
      e.preventDefault();
      $(".search").addClass("search--act");
    });

    $(".search__close").click(function (e) {
      e.preventDefault();
      $(".search").removeClass("search--act");
    });




    $(".nav__sub--script").mouseenter(function () {
      if ($(window).innerWidth() > 1199){
        // $(".nav__sub-wrap").offset().left
        var subleft = $(this).offset().left;
        var subwidth = $(this).innerWidth();
        var wscreen = $(".nav").innerWidth();
        var rev = subleft * (-1);
        var vpos = subleft + (subwidth/2);
  
        $(this).find(".nav__sub-wrap").css("left", rev);
        $(this).find(".nav__sub-wrap").css("width", wscreen);
        $(this).find(".sub-menu__v").css("left", vpos);
        console.log(44);  
        console.log("больше 1199");  
      } else {
        console.log("меньше 1199");  
      }
    });


    $(".nav__sub--script").click(function () {
      if ($(window).innerWidth() < 1200) {
        console.log("меньше 1200");
        $(this).toggleClass("nav__sub--open");
        // $(this).children(".nav__sub-wrap").toggleClass("nav__sub-wrap--open");
        // $(this).children(".nav__sub-wrap").slideClass("nav__sub-wrap--open");
        // $(this).children(".nav__sub-wrap").slideToggle("slow", function () {
        //   // Animation complete.
        // });
      } else {
        console.log("больше 1200");
      }
    });      

    $(".catalog__item").mouseleave(function () {
      // $(this).find(".catalog__effect").css("top", 0);
      // $(this).removeClass("catalog__item--hover");
      console.log(55);
    });
    jQuery(window).trigger('resize');

    $(".burger").click(
      function () {
        $(".left-menu").toggleClass("left-menu--open");
        $(".burger").toggleClass("burger--open");
        $("html").toggleClass("ov-h");
        $("body").toggleClass("ov-h");
      }
    );

  // $(".filter__all-h").click(function(){
  //   // $(this).toggleClass("filter__open-v");
  //   // $(this).closest(".filter__item").toggleClass("filter__open-v");
  //   // $(".filter__all").removeClass("filter__all--open");
  //   $(".filter__item--sort").find(".filter__item-all-wrap").removeClass("filter__item-all-wrap--open");
  //   $(this).closest(".filter__all").toggleClass("filter__all--open");
  // });
  // // $(".filter__item").click(function () {
  // //   $(this).find(".filter__item-all-wrap").toggleClass("filter__item-all-wrap--open");
  // // });
  // $(".filter__item-name").not(".filter__item-name--sort").click(function () {
  //   $(this).closest(".filter__item").toggleClass("filter__open-v");
  //   $(".filter__item-all-wrap").removeClass("filter__item-all-wrap--open");
  //   // $(this).closest(".filter__item").find(".filter__item-all-wrap").toggleClass("filter__item-all-wrap--open");
  //   // $(".filter__item-all-wrap").closest(".filter__item").find(".filter__item-name").not($(this)).removeClass("filter__item-all-wrap--open");
  //   // $(this).closest(".filter__item").find(".filter__item-all-wrap").toggleClass("filter__item-all-wrap--open");
  //   // $(this).closest(".filter__item").not(".filter__item--sort").find(".filter__item-all-wrap").addClass("filter__item-all-wrap--open");
  //   // $(this).closest(".filter__item").find(".filter__item-all-wrap").addClass("filter__item-all-wrap--open");
  //   $(this).closest(".filter__item").find(".filter__item-all-wrap").toggleClass("filter__item-all-wrap--open");
  // }); 
 
  // $(".filter__item-name--sort").click(function () {
  //   // $(this).toggleClass("filter__open-v");
  //   $(this).closest(".filter__item").toggleClass("filter__open-v");
  //   // $(".filter__item-all-wrap").removeClass("filter__item-all-wrap--open");
  //   $(".filter__all").removeClass("filter__all--open");
  //   $(this).closest(".filter__item--sort").find(".filter__item-all-wrap").toggleClass("filter__item-all-wrap--open");
  // });
  $(".filter__all-h").click(function(){
    $(".filter__item--sort").find(".filter__item-all-wrap").removeClass("filter__item-all-wrap--open");
    $(this).closest(".filter__all").toggleClass("filter__all--open");
  });
  $(".filter__item-name").not(".filter__item-name--sort").click(function () {
    // $(this).closest(".filter__item").toggleClass("filter__open-v");
    $(".filter__item").removeClass("filter__open--pos");
    $(this).closest(".filter__item").addClass("filter__open--pos");
    $(".filter__item-all-wrap").removeClass("filter__item-all-wrap--open");
    $(this).closest(".filter__item").find(".filter__item-all-wrap").toggleClass("filter__item-all-wrap--open");
  }); 
 
  $(".filter__item-name--sort").click(function () {
    // $(this).closest(".filter__item").toggleClass("filter__open-v");
    $(".filter__all").removeClass("filter__all--open");
    $(this).closest(".filter__item--sort").find(".filter__item-all-wrap").toggleClass("filter__item-all-wrap--open");
    $(this).closest(".filter__item--sort").toggleClass("filter__open--pos");
  });
    
});    


// $(".catalog__item").each(function () {
//     catItem = $(this).find(".js--catalog__height-original").innerHeight();

//     console.log('catItem = ' + catItem);
//     $(this).find(".js--catalog__height").css("height", catItem);
// });


// $(document).resize(function () {
//   slider.update(true);
// });

  //  $(window).resize(function () {
  //    update_resize();
  //    super_resize();
  //  });
   $(window).resize(function () {
     update_resize();
    //  super_resize();
   });
   $(window).resize(function () {
     menu_pos();
    //  super_resize();
   });

  $(window).scroll(function () {
    menu_pos();
  });

   function menu_pos() {
      if ($(window).innerWidth() < 1200) {
        // var tp = $(".nav").offset().top;
        var tp = $(".nav").position().top;
        var th = $(".nav").innerHeight();
        var tSum = tp + th;
        $(".left-menu").css("top", tSum);
      }
   }
   function update_resize() {

     $(".catalog__item").each(function () {

       var catItem = $(this).find(".js--catalog__height-original").innerHeight();

       console.log('catItem = ' + catItem);
       $(this).find(".js--catalog__height").css("height", catItem);
      });
      
    }


  // $(document).resize(function () {
  //     swiperStart22.update(true);
  //     swiperStart33.update(true);
  // });



  // $(document).ready(function(){
  //   update_resize();
  //   super_resize();
  //   jQuery(window).trigger('resize');
  // });
  $(document).ready(function(){
    update_resize();
    // super_resize();
    jQuery(window).trigger('resize'); 
  });

  // $(document).ready(function(){
  //   $("#start").sticky({topSpacing:0});
  // });
 

   

// $('[aria-expanded="false"].navbar-toggler').click(
//   function(){
//     $(this).toggleClass('burger-open');
//   }
// ); 

// 777

// var swiperStart22 = new Swiper('.js--swiper-22', {
//   // pagination: '.swiper-pagination',
//   slidesPerView: 'auto',
//   // paginationClickable: true,
//   spaceBetween: 0,
//   loop: true,
// });
// $(document).resize(function () {
//   swiperStart22.update(true);
// }); 



// var swiperStart33 = new Swiper('.js--swiper-33', {
//   // pagination: '.swiper-pagination',
//   slidesPerView: 'auto',
//   // paginationClickable: true,
//   spaceBetween: 0,
//   loop: true,
//   // initialSlide: 1,
//   onSlideChangeStart: function (swiperStart22){
//     console.log('777');
//     // console.log('sw22= ' + swiperStart33.activeIndex);
//     // console.log('sw33= ' + (swiperStart22.activeIndex + 1));
//   },
// });   
// $(document).resize(function () {
//   swiperStart33.update(true);
// });
// swiperStart22.params.control = swiperStart33;
// swiperStart33.params.control = swiperStart22;
// // swiperStart33.activeIndex = (swiperStart22.activeIndex + 1); 
// // swiperStart33.activeIndex = (swiperStart22 + 1); 
// // swiperStart33.activeIndex = swiperStart22.previousIndex; 

// console.log('sw22= ' + swiperStart33.activeIndex);
// console.log('sw33= ' + (swiperStart22.activeIndex + 1));