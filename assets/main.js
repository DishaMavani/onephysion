// $(document).ready(function() {
//     $("a").on("click touchend", function(e) {
//       var el = $(this);
//       var link = el.attr("href");
//       window.location = link;
//     });
// });
function getUrlParameters(parameter, staticURL, decode){

    var currLocation = (staticURL.length)? staticURL : window.location.search;
     if(currLocation){
      parArr = currLocation.split("?")[1].split("&");
      returnBool = true;
    
       
  
    for(var i = 0; i < parArr.length; i++){
         parr = parArr[i].split("=");
         if(parr[0] == parameter){
             return (decode) ? decodeURIComponent(parr[1]) : parr[1];
             returnBool = true;
         }else{
             returnBool = false;            
         }
    }
  } else {
    returnBool = false;    
  }
  
    if(!returnBool) return false;  
  }
$(document).ready(function () {
    $('.link-scroll').click(function (e) {
        e.preventDefault();
        sectionScroll = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(sectionScroll).offset().top
        }, 1000);
    });
    $(".percentage-item-muscles").each(function () {
        var compare = $(this).data("compare"),
            price = $(this).data("price"),
            result = parseInt(price * 100 / parseInt(compare));
        if(compare != "0.00"){
            $(this).text(100 - result + "% Off");
        }else{
            $(this).hide()
        }
    });
    $('.arrow-custom1').on('click touch', function(e) {

        e.preventDefault();
    
        let arrow = $(this);
    
        if(!arrow.hasClass('animate')) {
            arrow.addClass('animate');
            setTimeout(() => {
                arrow.removeClass('animate');
            }, 1600);
        }
    
    });
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="macos";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="unix";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="lunix";
    
    $("body").addClass("body-" + OSName);

    var idParameter = getUrlParameters("form_type", window.location, true);
    var idParameter2 = getUrlParameters("customer_posted", window.location, true);

        if(idParameter == 'customer'){
          setTimeout(() => {
          $(".content-notified").fadeOut();
          $('.box-content-finish').fadeIn();
          }, 1000);
  
        } else if(idParameter2 == 'true'){
          setTimeout(() => {
            $(".content-notified").fadeOut();
            $('.box-content-finish').fadeIn();
          }, 1000);
        }
  });
$(document).ready(function () {
    $(".item-tab-info-color").click(function (e) { 
        e.preventDefault();
        var target = $(this).data("target");
        var targetImageMobile = $(this).data("image");
        if(!$(this).hasClass("active")){
            $(".item-tab-info-color").removeClass("active")
            $(this).addClass("active");
            $(".item-content-info-color").hide();
            $(target).show()
            $(".img-item-center-info-color2").hide();
            $(targetImageMobile).show()
        }
    });
    $(".item-tab-banner-custom2").click(function (e) { 
        e.preventDefault();
        var target = $(this).data("target");
      console.log(target, "==", target+"-img");
        if(!$(this).hasClass("active")){
            $(".item-tab-banner-custom2").removeClass("active")
            $(this).addClass("active");
            $(".img-tab-banner2-content2").hide();
            $(target+"-img").show()
            $(".item-content-tab-banner-custom2").hide();
            $(target).show()
        }
    });
    $(".item-tab-statistics").click(function (e) { 
        e.preventDefault();
        var target = $(this).data("target");
        if(!$(this).hasClass("active")){
            $(".item-tab-statistics").removeClass("active")
            $(this).addClass("active");
            $('.item-right-statistics').removeClass('active-animation');
            $(".item-tab-content-statistics").hide();
            $(".box-right-section-statistics").hide();
            $('#'+target).show();
            $('.'+target).show();
          setTimeout(function(){
          $('.'+target).find('.item-right-statistics').addClass('active-animation');
            },100);
        }
    });

    $(".item-tab-adaptive-attachments").click(function (e) { 
        e.preventDefault();
        var target = $(this).data("target");
        if(!$(this).hasClass("active")){
            $(".item-tab-adaptive-attachments").removeClass("active")
            $(this).addClass("active");
            $(".item-tabs-content-adaptive-attachments").hide();
            $(target).show()
        }
    });
    $(".btn-custom-accordion").click(function (e) { 
        if($(this).hasClass("active")){
            $(this).closest(".card-custom1").find(".collapse").slideUp()
            $(this).removeClass("active")
        }else{
            $(this).closest(".accordion").find(".btn-custom-accordion").removeClass("active")
            $(this).closest(".accordion").find(".collapse").slideUp()
            $(this).closest(".card-custom1").find(".collapse").slideDown()
            $(this).addClass("active")
        }
    });
    $(".accordion__toggle").click(function (e) { 
      if($(this).hasClass("active")){
        $(this).closest(".accordion__item").find(".accordion__content").slideUp()
        $('.accordion__toggle').closest(".accordion__item").removeClass("in")
        $(this).closest(".accordion__item").removeClass("in")
        $(this).removeClass("active")
      }else{
        $('.accordion__toggle').closest(".accordion__item").removeClass("in")
        $(this).closest(".accordion__item").removeClass("in")
        $(this).closest(".accordion").find(".accordion__toggle").removeClass("active")
        $(this).closest(".accordion").find(".accordion__content").slideUp()
        $(this).closest(".accordion__item").find(".accordion__content").slideDown()
        $(this).addClass("active")
        $(this).closest(".accordion__item").addClass("in")
      }
    });
  
    var physionCarousel1 = new Swiper('#physion-carousel1', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        slidesPerView: 1,
        breakpoints: {
            0: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 30,
            },
            480: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var physionCarousel2 = new Swiper('#physion-carousel', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            0: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1.6,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var physionCarousel3 = new Swiper('.product-top-carousel', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 18,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1.15
            },
            480: {
                slidesPerView: 1.15
            },
            768: {
                slidesPerView: 1.15
            },
            991: {
                slidesPerView: 1.15
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var physionCarousel4 = new Swiper('.product-carousel-1', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 18,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            991: {
                slidesPerView: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

  var swiper_test = new Swiper(".testimonials_slider", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  var swiper_grid = new Swiper(".collection-slider", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  
  
  
    var physionCarousel8 = new Swiper('.plans-product-mobile', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 3.4,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5
            },
            480: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 1.5
            },
            991: {
                slidesPerView: 1.5
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var physionCarousel5 = new Swiper('.product-carousel-2', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 18,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            991: {
                slidesPerView: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
    });
    

    $(".btn-mobile").click(function (e) { 
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".links-header-container").removeClass("active");
            $("body").removeClass("modal-open");
        }else{
            $(this).addClass("active");
            $(".links-header-container").addClass("active");
            $("body").addClass("modal-open");
        }
    });
    if($(window).innerWidth() >= 991) {
        $(".link-have-child-item-header > a").click(function (e) { 
            e.preventDefault();
        });
        $( ".link-have-child-item-header" ).hover(
            function() {
            $( "header" ).addClass( "active-hover-menu" );
            }, function() {
            $( "header" ).removeClass( "active-hover-menu" );
            }
        );
    }

    var lastScrollTop = 0;
    if ( screen.width < 991 ){
        offsetAnimate = 350;
    }else{
        offsetAnimate = 200;
    }
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        var sectionIds = $('.has-element-animate');
        if(sectionIds.length != 0){
            sectionIds.each(function(){
    
                var containerOffset = $(this).offset().top;
                var containerHeight = $(this).outerHeight();
                var containerBottom = containerOffset + containerHeight;
                var scrollPosition = $(document).scrollTop();
        
                if(scrollPosition < containerBottom - 250 && scrollPosition >= containerOffset - 550){
                    $(this).find(".animation-scroll").addClass('active-animation');
                }
            });
        }
        var productSection = $('.buttom-buy-cart');
        if(productSection.length != 0){
            var containerOffsetProductSection = productSection.offset().top;
            var containerHeightProductSection = productSection.outerHeight();
            var containerBottomProductSection = containerOffsetProductSection + containerHeightProductSection;
            var scrollPosition = $(document).scrollTop();
          if(scrollPosition >= containerOffsetProductSection){
            $(".pdp-top-bar").addClass("active")
          }
          else{
            $(".pdp-top-bar").removeClass("active")
          }
          if($(window).width() < 991){
          	if(scrollPosition >= containerOffsetProductSection){
            $(".pdp-bottom-bar").addClass("active")
          }
          else{
            $(".pdp-bottom-bar").removeClass("active")
          }
          }
        }
      
      var item_performance = $('#testimonials_item_1');
        if(item_performance.length != 0){
           swiper_test.slideTo( 0,500,false );
        }
      var item_performance = $('#testimonials_item_2');
        if(item_performance.length != 0){
           swiper_test.slideTo( 0,500,false );
        }
      var item_performance = $('#testimonials_item_3');
        if(item_performance.length != 0){
            swiper_test.slideTo( 0,500,false );
        }
      var item_performance = $('#testimonials_item_4');
        if(item_performance.length != 0){
            swiper_test.slideTo( 0,500,false );
        }
      
      var item_performance = $('#grid_item_1');
        if(item_performance.length != 0){
           swiper_grid.slideTo( 0,500,false );
        }
      var item_performance = $('#grid_item_2');
        if(item_performance.length != 0){
           swiper_grid.slideTo( 0,500,false );
        }
      var item_performance = $('#grid_item_3');
        if(item_performance.length != 0){
            swiper_grid.slideTo( 0,500,false );
        }
      
      
        var item_performance = $('#performance-items-custom1');
        if(item_performance.length != 0){
            var containerOffset1 = item_performance.offset().top;
            var containerHeight1 = item_performance.outerHeight();
            var containerBottom1 = containerOffset1 + containerHeight1;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom1 - offsetAnimate && scrollPosition >= containerOffset1 - offsetAnimate){
                if (st > lastScrollTop) {
                    physionCarousel4.slideTo( 0,500,false );
                }else{
                    physionCarousel4.slideTo( 0,500,false );
                }
                lastScrollTop = st;
            }
        }
        var item_performance2 = $('#performance-items-custom2');
        if(item_performance2.length != 0){
            var containerOffset2 = item_performance2.offset().top;
            var containerHeight2 = item_performance2.outerHeight();
            var containerBottom2 = containerOffset2 + containerHeight2;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom2 - offsetAnimate && scrollPosition >= containerOffset2 - offsetAnimate){
                if (st > lastScrollTop) {
                    physionCarousel4.slideTo( 1,500,false );
                }else{
                    physionCarousel4.slideTo( 1,500,false );
                }
                lastScrollTop = st;
            }
        }
        var item_performance3 = $('#performance-items-custom3');
        if(item_performance3.length != 0){
            var containerOffset3 = item_performance3.offset().top;
            var containerHeight3 = item_performance3.outerHeight();
            var containerBottom3 = containerOffset3 + containerHeight3;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom3 - offsetAnimate && scrollPosition >= containerOffset3 - offsetAnimate){
                if (st > lastScrollTop) {
                    physionCarousel4.slideTo( 2,500,false );
                }else{
                    physionCarousel4.slideTo( 2,500,false );
                }
                lastScrollTop = st;
            }
        }
        var item_performance4 = $('#performance-items-custom4');
        if(item_performance4.length != 0){
            var containerOffset4 = item_performance4.offset().top;
            var containerHeight4 = item_performance4.outerHeight();
            var containerBottom4 = containerOffset4 + containerHeight4;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom4 - offsetAnimate && scrollPosition >= containerOffset4 - offsetAnimate){
                if (st > lastScrollTop) {
                    physionCarousel4.slideTo( 3,500,false );
                }else{
                    physionCarousel4.slideTo( 3,500,false );
                }
                lastScrollTop = st;
            }
        }
        var item_card_caracteristicas = $('#caracteristica-product1');
        if(item_card_caracteristicas.length != 0){
            var containerOffset1 = item_card_caracteristicas.offset().top;
            var containerHeight1 = item_card_caracteristicas.outerHeight();
            var containerBottom1 = containerOffset1 + containerHeight1;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom1 - offsetAnimate && scrollPosition >= containerOffset1 - offsetAnimate){
                if (st > lastScrollTop) {
                    $(".card-caracteristicas-product").removeClass("active")
                    $("#card-caracteristicas-product1").addClass("active")
                    $(".list-card-caracteristicas-product").removeClass("active1 active2 active3")
                    $(".list-card-caracteristicas-product").addClass("active1")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(1).removeClass("swiper-pagination-bullet-active")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(2).removeClass("swiper-pagination-bullet-active")
                    physionCarousel1.slideTo( 0,500,false );
                }else{
                    $(".card-caracteristicas-product").removeClass("active")
                    $("#card-caracteristicas-product1").addClass("active")
                    $(".list-card-caracteristicas-product").removeClass("active1 active2 active3")
                    $(".list-card-caracteristicas-product").addClass("active1")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(1).removeClass("swiper-pagination-bullet-active")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(2).removeClass("swiper-pagination-bullet-active")
                    physionCarousel1.slideTo( 0,500,false );
                }
                lastScrollTop = st;
            }
        }
        var item_card_caracteristicas2 = $('#caracteristica-product2');
        if(item_card_caracteristicas2.length != 0){
            var containerOffset2 = item_card_caracteristicas2.offset().top;
            var containerHeight2 = item_card_caracteristicas2.outerHeight();
            var containerBottom2 = containerOffset2 + containerHeight2;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom2 - offsetAnimate && scrollPosition >= containerOffset2 - offsetAnimate){
                if (st > lastScrollTop) {
                    $(".card-caracteristicas-product").removeClass("active")
                    $("#card-caracteristicas-product2").addClass("active")
                    $(".list-card-caracteristicas-product").removeClass("active1 active2 active3")
                    $(".list-card-caracteristicas-product").addClass("active2");
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(0).addClass("swiper-pagination-bullet-active")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(2).removeClass("swiper-pagination-bullet-active")
                    physionCarousel1.slideTo( 1,500,false );
                }else{
                    $(".card-caracteristicas-product").removeClass("active")
                    $("#card-caracteristicas-product2").addClass("active")
                    $(".list-card-caracteristicas-product").removeClass("active1 active2 active3")
                    $(".list-card-caracteristicas-product").addClass("active2")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(0).addClass("swiper-pagination-bullet-active")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(2).removeClass("swiper-pagination-bullet-active")
                    physionCarousel1.slideTo( 1,500,false );
                }
                lastScrollTop = st;
            }
        }
        var item_card_caracteristicas3 = $('#caracteristica-product3');
        if(item_card_caracteristicas3.length != 0){
            var containerOffset3 = item_card_caracteristicas3.offset().top;
            var containerHeight3 = item_card_caracteristicas3.outerHeight();
            var containerBottom3 = containerOffset3 + containerHeight3;
            var scrollPosition = $(document).scrollTop();
            if(scrollPosition < containerBottom3 - offsetAnimate && scrollPosition >= containerOffset3 - offsetAnimate){
                if (st > lastScrollTop) {
                    $(".card-caracteristicas-product").removeClass("active")
                    $("#card-caracteristicas-product3").addClass("active")
                    $(".list-card-caracteristicas-product").removeClass("active1 active2 active3")
                    $(".list-card-caracteristicas-product").addClass("active3")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(0).addClass("swiper-pagination-bullet-active")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(1).addClass("swiper-pagination-bullet-active")
                    physionCarousel1.slideTo( 2,500,false );
                }else{
                    $(".card-caracteristicas-product").removeClass("active")
                    $("#card-caracteristicas-product3").addClass("active")
                    $(".list-card-caracteristicas-product").removeClass("active1 active2 active3")
                    $(".list-card-caracteristicas-product").addClass("active3")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(0).addClass("swiper-pagination-bullet-active")
                    $("#physion-carousel1 .swiper-pagination .swiper-pagination-bullet").eq(1).addClass("swiper-pagination-bullet-active")
                    physionCarousel1.slideTo( 3,500,false );
                }
                lastScrollTop = st;
            }
        }
    })

    var swiperOptions = {
        loop: true,
        autoplay: {
            delay: 3,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        speed: 3000,
        grabCursor: false,
        mousewheelControl: false,
        allowTouchMove: false,
        keyboardControl: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 3
            },
            480: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 5
            },
            991: {
                slidesPerView: 7
            },
            1199: {
                slidesPerView: 8
            },
            1400: {
                slidesPerView: 9
            },
            1600: {
                slidesPerView: 11
            },
        },
    };
    
    var swiper = new Swiper(".swiper-marquee", swiperOptions);

    // var timeline = new TimelineMax();
    // timeline.from(".animate-section-text-init", .5, {
    //     y:15,
    //     opacity: .5
    // },0)
    // .from(".animate-section-text-init2", .75, {
    //     y:20,
    //     opacity: .5
    // },0)

    gsap.registerPlugin(ScrollTrigger);
    // For each images with class "animate-image" on page
    /* gsap.utils.toArray('.animate-section').forEach((el, index) => { 
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%+=100px",
                end: "bottom 0%+=100px",
                toggleActions: "play none none reverse",
                markers: false
            }
        })
        tl.set($(el).find(".animate-section-text"), 
        {transformOrigin: 'center center'}).fromTo($(el).find(".animate-section-text"), 
        { opacity: 0, opacity: 0.5, y: "15px"}, 
        {opacity: 1, opacity: 1, y: 0, duration: .5, immediateRender: false})

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%+=100px",
                end: "bottom 0%+=100px",
                toggleActions: "play none none reverse",
                markers: false
            }
        })
        tl2.set($(el).find(".animate-section-text2"), 
        {transformOrigin: 'center center'}).fromTo($(el).find(".animate-section-text2"), 
        { opacity: 0, opacity: 0.5, y: "20px"}, 
        {opacity: 1, opacity: 1, y: 0, duration: .75, immediateRender: false})

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%+=100px",
                end: "bottom 0%+=100px",
                toggleActions: "play none none reverse",
                markers: false
            }
        })
        tl3.set($(el).find(".animate-section-text3"), 
        {transformOrigin: 'center center'}).fromTo($(el).find(".animate-section-text3"), 
        { opacity: 0, opacity: 0.5, y: "25px"}, 
        {opacity: 1, opacity: 1, y: 0, duration: 1, immediateRender: false})
    }) */
    var swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 20,
        freeMode: true,
        watchSlidesVisibility: true,
        allowTouchMove: false,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 3
            },
            1199: {
                slidesPerView: 4
            },
            1400: {
                slidesPerView: 4
            },
            1600: {
                slidesPerView: 5
            },
        }, 
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: false,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        thumbs: {
          swiper: swiper,
        },
    });
    $(".colorSelect").change(function (e) { 
        e.preventDefault();
        if($(this).val() == 39643194589370){
            swiper2.slideTo(0)
        }else{
            swiper2.slideTo(3)
        }
    });
      var physionCarousel7 = new Swiper('.product-carousel-5', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            991: {
                slidesPerView: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var physionCarousel8 = new Swiper('.product-carousel-8', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            991: {
                slidesPerView: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var physionCarouse0 = new Swiper('.product-carousel-9', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            991: {
                slidesPerView: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var physionCarouse0 = new Swiper('.product-carousel-10', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            991: {
                slidesPerView: 1
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $('.count').prop('disabled', true);
    /*$(document).on('click','.plus',function(){
        $(this).parent().find('.count').val(parseInt($(this).parent().find('.count').val()) + 1 );
    });
    /*$(document).on('click','.minus',function(){
        alert($(this).parent().find('.count').val());
        $(this).parent().find('.count').val(parseInt($(this).parent().find('.count').val()) - 1 );
        if ($(this).parent().find('.count').val() == 0) {
            $(this).parent().find('.count').val(1);
        }
    });*/

    /*$(".link-remove-product").click(function (e) { 
        e.preventDefault();
        $(this).closest(".box-custom-cart").remove();
    });*/
    (function marquee() {
        var marqueeWrapper = $('.js-marquee');
        var FPS = (60 / 100); // 60fps
        var SLIDESPEED = 1000; // default | lower is faster

        marqueeWrapper.each(function (index, element) {
            var _marqueeWrapper = $(element);
            var _marqueeTracks = $('>ul', _marqueeWrapper);
            var _marqueeSlides = $('>ul>li', _marqueeWrapper);
            var _marqueeWidth = parseFloat(_marqueeSlides.last().position().left + _marqueeSlides.last().outerWidth(true));
            var shifted = _marqueeWrapper.attr('data-marquee-shift') || false;

            var SPEED = (_marqueeWrapper.attr('data-marquee-speed') * _marqueeSlides.length) || (SLIDESPEED * _marqueeSlides.length);
            var frames = SPEED * FPS;
            var steps = _marqueeWidth / frames; // distance elems will move each frames
            var posX = 0;
            var tempSteps;

            function _clone() {
                var times = Math.ceil(_marqueeWrapper.outerWidth(true) / _marqueeWidth) + 1;
                _marqueeTracks.each(function () {
                    $('>ul', _marqueeWrapper).empty();
                    var sliders = _marqueeSlides;
                    for (i = 1; i <= times; i++) {
                        sliders.clone().appendTo(($(this)));
                    }
                })
            }

            function _animated() {
                posX += -steps;
                _marqueeTracks.css({
                    transform: 'translate3d(' + posX + 'px, 0, 0)'
                });
                if (Math.abs(posX) >= _marqueeWidth) {
                    posX = 0;
                }
                window.requestAnimationFrame(_animated);
            }

            function _pause() {
                tempSteps = steps;
                return steps = 0;
            }

            function _resume() {
                return steps = tempSteps;
            }

            function _shiftPosition() {
                if (shifted) return posX = -(_marqueeSlides.first().outerWidth(true)) / 2;
            }

            function _registerEvents() {
                _marqueeTracks.on('mouseenter', _pause);
                _marqueeTracks.on('mouseleave', _resume);
                $(window).on('resize', debounce(_clone, 300))
            }

            function init() {
                _shiftPosition()
                _clone();
                _animated();
            }

            function debounce(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this,
                        args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }; // debounce

            init();
        })
    })();
});
$(document).ready(function () {
    var dataPrice = $(".price-payments").data('price');
    if(dataPrice != ''){
        var total = parseFloat(parseFloat(dataPrice)/parseFloat(4));
        var total3 = parseFloat(parseFloat(dataPrice)/parseFloat(3));
        $(".afterpay").html('£ '+total.toFixed(2));
        $(".afterpayKlarna").html('£ '+total3.toFixed(2));
        $(".afterpayPay").html('£ '+total.toFixed(2));
    }
    $(".btn-show-modal-video").click(function (e) { 
        e.preventDefault();
        $(".modal-video").fadeIn();
    });
    $(".overlay-modal-video, .btn-close-modal-video").click(function (e) { 
        e.preventDefault();
        $(".modal-video").fadeOut();
    });



//   var d = new Date().getTime();
//   var random = Math.floor((Math.random() * d * 10) + 1);
//   $('.bundleId').val(random);
  
  $('body').on('click', '.upsell_add_cart', function(e){
    e.preventDefault();
//     var bundleID = $(this).closest('.upsell__holder').find('.bundleId').val();
    var main_pro_id = $('input[type="radio"]:checked').val();
    var upsell_pro_id = $(this).closest('.upsell__holder').find('.upsell_common').val();
     var items = [
       { quantity: 1, id: main_pro_id },
      { quantity: 1, id: upsell_pro_id }
    ];
    $.ajax({
      type: "POST",
      url: '/cart/add.js',
      data: { items: items },
      success: function(data) {
        $.getJSON('/cart.js', function(cart){
          $('.number-car-header-link').text(cart.item_count);
        });
        window.location ='/cart'
      },     
    });
  });

  $('.item-radio-custom1').on('click', function(){
    var main_pro_id = $(this).find('input[type="radio"]:checked').val();
    $('.varinat_add_id').attr('href', 'https://onephysion.myshopify.com/cart/'+main_pro_id+':1');
  });
    
});

