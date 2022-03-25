$(document).ready(function () {
    function addToCartDeliver() {  
        function get_cookie(name){ return( document.cookie.match('(^|; )'+name+'=([^;]*)')||0 )[2] }
          do {
                    token=get_cookie('cart');
          }
          while(token == undefined);	var myshopify_domain='gelblaster.myshopify.com'
          try { var ga_linker = ga.getAll()[0].get('linkerParam') } catch(err) { var ga_linker ='' }
        checkout_url= "https://checkout.rechargeapps.com/r/checkout?myshopify_domain="+myshopify_domain+"&cart_token="+token+"&"+ga_linker;
        $("#btn-checkout").attr("href", checkout_url);
    }
    $( "body" ).delegate( "#live-chat", "click", function(e) {
        e.preventDefault();
        $("#launcher .u-userLauncherColor:not([disabled])").trigger("click")
    });

    $(".show-modal-klarna").click(function (e) { 
        e.preventDefault();
        var priceKlarna = $(".learn-more-content span").text();
        $(".title-modal-klarna").text("3 interest-free payments of " + priceKlarna);
        $(".modal-klarna").fadeIn();
        $("body").addClass("modal-open");
    });
    $(".btn-close-modal-klarna, .btn-klarna, .overlay-modal-klarna").click(function (e) { 
        e.preventDefault();
        $(".modal-klarna").fadeOut();
        $("body").removeClass("modal-open");
    });

    $(".select-quantity-product label").click(function () { 
        var dataPrice = $(this).data("price");
        var dataKlarna = $(this).data("klarna");
        $("#price_product").text("$" + dataPrice);
        $(".learn-more-content h4 span").text("$" + dataKlarna + " ");
        $(".title-modal-klarna span").text("$" + dataKlarna);
    });



    $(".btn-back-menu-header, .overlay-cart").click(function (e) { 
        e.preventDefault();
        $("body").removeClass("modal-open");
        $(".overlay-cart").fadeOut();
        $(".cart-sidebar").removeClass("active");
    });

    function getFormData($form){
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};
      
        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });
      
        return indexed_array;
    }
    /*Add Cart */
    function addItemProduct(form_id, e) {
        var $form = $('#'+form_id);
        var data = getFormData($form);

        $(".cart-sidebar-body-fully").show();
        $(".cart-sidebar-body-empty").hide();
        $(".cart-sidebar-footer").removeClass("cart-sidebar-footer-empty");
        if(data.selling_plan_244487 == "onetime"){
   
          $.getJSON('/cart.js', function(cart) {
            $('.number-items-cart').html(cart.item_count);
            if(cart.item_count == 0){
            jQuery.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: $('#'+form_id).serialize(),
                success: openCart
//                 error: Shopify.onError
              });
      
            } else {
              var id = $("#id").val();
          
              var quantity = $('input[name=quantity]', '#add-to-cart').val();
              var data = $('#'+form_id).serializeArray();
              $.post('/cart/update.js', 'updates['+id+']='+quantity);
              $("#checkout-link").attr('href', '');
              setTimeout(function(){ 
                jQuery.getJSON('/cart.js', function(cart) {
                $('.count-change').html(cart.item_count);
                
                $('.item-cart'+id).hide('slow')
                //$('.btn-design1 span').html(Shopify.formatMoney(cart.total_price));
                } );
              }, 0);
              setTimeout(() => {
                $.ajax({
                  type: 'POST',
                  url: '/cart/add.js',
                  dataType: 'json',
                  data: $('#'+form_id).serialize(),
                  success: openCart
//                   error: Shopify.onError
                });
              }, 500);
            }
          });
    
        } else {
           
          $.getJSON('/cart.js', function(cart) {
            $('.number-items-cart').html(cart.item_count);
            if(cart.item_count == 0){
              $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: $('#'+form_id).serialize(),
                success: openCart
//                 error: Shopify.onError
              });
      
            } else {
            var id = $("#id").val();
            var quantity = $('input[name=quantity]', '#add-to-cart').val();

            var data = $('#'+form_id).serializeArray();
            $.post('/cart/update.js', 'updates['+id+']='+quantity);
            $("#checkout-link").attr('href', '');
            setTimeout(function(){ 
              jQuery.getJSON('/cart.js', function(cart) {
              $('.count-change').html(cart.item_count);
              
              $('.item-cart'+id).hide('slow')
              //$('.btn-design1 span').html(Shopify.formatMoney(cart.total_price));
              } );
            }, 0);
            setTimeout(() => {
              $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: $('#'+form_id).serialize(),
                success: openCart
//                 error: Shopify.onError
              });
            }, 500);
            }
          });
    
        }
        
      }
      /*Add Cart2 */
    function addItemProduct2(form_id, e) {
        var $form = $('#'+form_id);
        var data = getFormData($form);

        $(".cart-sidebar-body-fully").show();
        $(".cart-sidebar-body-empty").hide();
        $(".cart-sidebar-footer").removeClass("cart-sidebar-footer-empty");
        if(data.selling_plan_244487 == "onetime"){
   
          $.getJSON('/cart.js', function(cart) {
            $('.number-items-cart').html(cart.item_count);
            if(cart.item_count == 0){
            jQuery.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: $('#'+form_id).serialize(),
                success: openCart2
//                 error: Shopify.onError
              });
      
            } else {
              var id = $("#id").val();
          
              var quantity = $('input[name=quantity]', '#add-to-cart').val();
              var data = $('#'+form_id).serializeArray();
              $.post('/cart/update.js', 'updates['+id+']='+quantity);
              $("#checkout-link").attr('href', '');
              setTimeout(function(){ 
                jQuery.getJSON('/cart.js', function(cart) {
                $('.count-change').html(cart.item_count);
                
                $('.item-cart'+id).hide('slow')
                //$('.btn-design1 span').html(Shopify.formatMoney(cart.total_price));
                } );
              }, 0);
              setTimeout(() => {
                $.ajax({
                  type: 'POST',
                  url: '/cart/add.js',
                  dataType: 'json',
                  data: $('#'+form_id).serialize(),
                  success: openCart2
//                   error: Shopify.onError
                });
              }, 500);
            }
          });
    
        } else {
           
          $.getJSON('/cart.js', function(cart) {
            $('.number-items-cart').html(cart.item_count);
            if(cart.item_count == 0){
              $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: $('#'+form_id).serialize(),
                success: openCart2
//                 error: Shopify.onError
              });
      
            } else {
            var id = $("#id").val();
            var quantity = $('input[name=quantity]', '#add-to-cart').val();

            var data = $('#'+form_id).serializeArray();
            $.post('/cart/update.js', 'updates['+id+']='+quantity);
            $("#checkout-link").attr('href', '');
            setTimeout(function(){ 
              jQuery.getJSON('/cart.js', function(cart) {
              $('.count-change').html(cart.item_count);
              
              $('.item-cart'+id).hide('slow')
              //$('.btn-design1 span').html(Shopify.formatMoney(cart.total_price));
              } );
            }, 0);
            setTimeout(() => {
              $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: $('#'+form_id).serialize(),
                success: openCart2
//                 error: Shopify.onError
              });
            }, 500);
            }
          });
    
        }
        
      }
    /*Up quantity */
        $('.box-custom-cart').on('click', '.more', function() {
          var id = $(this).data('id'); 
          var _this = $(this);
          valueInput = parseInt($('.box-custom-cart'+id+' input[name="cant_products"]').val());
          var result = valueInput + parseInt(1);
          $.post('/cart/update.js', 'updates['+id+']='+result);
          $('.box-custom-cart'+id+' input[name="cant_products"]').val(valueInput + 1);
          $('.number-cart-header').html(result);
          setTimeout(() => {
                     $.getJSON("/cart.js", function (cart) {
            //             $("#subtotal-cart").text(Shopify.formatMoney(cart.items_subtotal_price, "£ {{amount}}"))
            $(".total-cart").text(Shopify.formatMoney(cart.total_price, "£ {{amount}}"));
            var dataPrice = parseFloat(Shopify.formatMoney(cart.total_price).substring(1));
            if(dataPrice != ''){
              var total = parseFloat(parseFloat(dataPrice)/parseFloat(4));
              var total3 = parseFloat(parseFloat(dataPrice)/parseFloat(3));
              $(".afterpay").html('£ '+total.toFixed(2));
              $(".afterpayKlarna").html('£ '+total3.toFixed(2));
              $(".afterpayPay").html('£ '+total.toFixed(2));
            }
            var sum_col = parseInt(0);
               var sum_org = parseInt(0);
               $.each($('.box-custom-cart').not('.hide'), function(index,val){
                 var var_id = $(val).attr('data-var_id');
                 var comp_p = $(val).find('.content-price-box2 h5').data('comp_price');
                 var total_p = $(val).find('.content-price-box2 h3').data('org_price');
                 var qty = $(val).find('.qty').find('.count').val();
                 var comp_m = comp_p * qty;
                 var total_m = total_p * qty;
                 sum_col += comp_m;
                 sum_org += total_m;
               });
            console.log(sum_col, "========================");
               var diff = sum_col - sum_org;
               $(".your-saved-box-price-cart .dis_txt").text(Shopify.formatMoney(diff, "£ {{amount}}"));

            $("#subtotal-cart").text(Shopify.formatMoney(sum_col, "£ {{amount}}"));
            console.log("fjkghdkg");
          })
        }, 300)
        });


       /*Down quantity */
    $('.box-custom-cart').on('click', '.minus-minus', function(e) {
        e.preventDefault();
        var id = $(this).data('id'); 
        valueInput = parseInt($('.box-custom-cart'+id+' input[name="cant_products"]').val());
        if(valueInput != 1){
            var result = valueInput - parseInt(1);
            $.post('/cart/update.js', 'updates['+id+']='+result);
              $('.box-custom-cart'+id+' input[name="cant_products"]').val(valueInput - 1);
              $('.number-cart-header').html(result);
             setTimeout(() => {
              $.getJSON("/cart.js", function (cart) {
                //$('#subtotal-cart').html('<span class="product-price">'+ Shopify.formatMoney(cart.items_subtotal_price, "{{ shop.money_with_currency_format }}") + '</span>' );
//                     $("#subtotal-cart").text(Shopify.formatMoney(cart.items_subtotal_price, "£ {{amount}}"));
                    $(".total-cart").text(Shopify.formatMoney(cart.total_price, "£ {{amount}}"));
                    var dataPrice = parseFloat(Shopify.formatMoney(cart.total_price).substring(1));
                    if(dataPrice != ''){
                        var total = parseFloat(parseFloat(dataPrice)/parseFloat(4));
                        var total3 = parseFloat(parseFloat(dataPrice)/parseFloat(3));
                        $(".afterpay").html('£ '+total.toFixed(2));
                        $(".afterpayKlarna").html('£ '+total3.toFixed(2));
                        $(".afterpayPay").html('£ '+total.toFixed(2));
                    }
               var sum_col = parseInt(0);
               var sum_org = parseInt(0);
               $.each($('.box-custom-cart').not('.hide'), function(index,val){
                 var var_id = $(val).attr('data-var_id');
                 var comp_p = $(val).find('.content-price-box2 h5').data('comp_price');
                 var total_p = $(val).find('.content-price-box2 h3').data('org_price');
                 var qty = $(val).find('.qty').find('.count').val();
                 var comp_m = comp_p * qty;
                 var total_m = total_p * qty;
                 sum_col += comp_m;
                 sum_org += total_m;
               });
               var diff = sum_col - sum_org;
               $(".your-saved-box-price-cart .dis_txt").text(Shopify.formatMoney(diff, "£ {{amount}}"));

               $("#subtotal-cart").text(Shopify.formatMoney(sum_col, "£ {{amount}}"));
              })
          }, 300)
        }
      });
    /*Delete Cart */
    $('.box-custom-cart').on('click', '.btn-delete-item-cart', function(e) {
        e.preventDefault();
        var id = $(this).data('id');   
      $.post('/cart/update.js', 'updates['+id+']=0');
        
        setTimeout(function(){ 
            jQuery.getJSON('/cart.js', function(cart) {
                $('.number-cart-header').html(cart.item_count);
                
                $('.box-custom-cart'+id).hide();
              $('.box-custom-cart'+id).addClass('hide');

                if(id == '37554090377372'){
                    $("#btn-checkout").attr("href", "/checkout");
                }
                //$('.btn-design1 span').html(Shopify.formatMoney(cart.total_price));
//                 $("#subtotal-cart").text(Shopify.formatMoney(cart.items_subtotal_price, "£ {{amount}}"));
                $(".total-cart").text(Shopify.formatMoney(cart.total_price, "£ {{amount}}"));
                var dataPrice = parseFloat(Shopify.formatMoney(cart.total_price).substring(1));
                if(dataPrice != ''){
                    var total = parseFloat(parseFloat(dataPrice)/parseFloat(4));
                    var total3 = parseFloat(parseFloat(dataPrice)/parseFloat(3));
                    $(".afterpay").html('£ '+total.toFixed(2));
                    $(".afterpayKlarna").html('£ '+total3.toFixed(2));
                    $(".afterpayPay").html('£ '+total.toFixed(2));
                }
              
            } );
         }, 300);
         setTimeout(() => {
           $.getJSON("/cart.js", function (t) {
               console.log("Test" + t.item_count);
               if(t.item_count == 0 || t.item_count == "0"){
                 $(".cart-sidebar-body-fully").hide();
                 $(".cart-sidebar-body-empty").show().css("display","flex");
                 $(".cart-sidebar-footer").addClass("cart-sidebar-footer-empty");
               }
//                $("#subtotal-cart").text(Shopify.formatMoney(t.items_subtotal_price, "£ {{amount}}"));
               $(".total-cart").text(Shopify.formatMoney(t.total_price, "£ {{amount}}"));
               var dataPrice = parseFloat(Shopify.formatMoney(t.total_price).substring(1));
                if(dataPrice != ''){
                    var total = parseFloat(parseFloat(dataPrice)/parseFloat(4));
                    var total3 = parseFloat(parseFloat(dataPrice)/parseFloat(3));
                    $(".afterpay").html('£ '+total.toFixed(2));
                    $(".afterpayKlarna").html('£ '+total3.toFixed(2));
                    $(".afterpayPay").html('£ '+total.toFixed(2));
                }
           
         });
       }, 700);
          
		setTimeout(function(){
          var sum_col = parseInt(0);
          var sum_org = parseInt(0);
          $.each($('.box-custom-cart').not('.hide'),function(index,val){
            var var_id = $(val).attr('data-var_id');
            var comp_p = $(val).find('.content-price-box2 h5').data('comp_price');
            var total_p = $(val).find('.content-price-box2 h3').data('org_price');
            var qty = $(val).find('.qty').find('.count').val();
            var comp_m = comp_p * qty;
            var total_m = total_p * qty;
            sum_col += comp_m;
            sum_org += total_m;
          });          
          var diff = sum_col - sum_org;
          $(".your-saved-box-price-cart .dis_txt").text(Shopify.formatMoney(diff, "£ {{amount}}"));
          
          $("#subtotal-cart").text(Shopify.formatMoney(sum_col, "£ {{amount}}"));
        },800);	         

             


     });
     $('.contain-cart-header').click(function (e) { 
        
        e.preventDefault();
        $(".items-cart").html(" ");
        $.getJSON('/cart.js', function(cart) {
      
          $('.number-cart-header').html(cart.item_count);
          if(cart.items.length > 0){
            $.each( cart.items, function( key, value ) {
                console.log(value);
                $( ".items-cart" ).append( '<div class="item-cart item-cart'+value.variant_id+' '+value.variant_id+' item-cart'+value.product_id+'">'+
                    '<div class="item-cart-left">'+
                    
                        '<img src="'+value.featured_image.url+'" alt="">'+
                    '</div>'+
                    '<div class="item-cart-center">'+
                        '<h3 class="title-item-cart">'+value.product_title+'</h3>'+
                        '<p id="description"></p>'+
                        '<div class="box-quantity-item-cart">'+
                            '<span class="minus minus-minus" data-id="'+value.id+'">-</span>'+
                            '<input type="number" name="cant_products" value="'+value.quantity+'" readonly name="" id="">'+
                            '<span class="minus more" data-id="'+value.id+'">+</span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="item-cart-right">'+
                    '<h3 class="price-item-cart">'+Shopify.formatMoney(value.price)+'</h3>'+
                    '<button class="btn-delete-item-cart" data-id="'+value.variant_id+'"><img src="//cdn.shopify.com/s/files/1/0073/1385/0439/t/9/assets/icon-delete.svg?v=3099344619731825546" alt=""></button>'+
                    '</div>'+
                '</div>'+
                    '<input type="hidden" name="form_type" value="product">'+
                    '<input type="hidden" name="utf8" value="✓">'+
                    '<input type="hidden" name="id" id="value_product" value="'+value.id+'">'+
                '</div>');
            });
          }else{
            $(".cart-sidebar-body-fully").hide();
            $(".cart-sidebar-body-empty").show().css("display","flex");
            $(".cart-sidebar-footer").addClass("cart-sidebar-footer-empty");
          }
          
        });
        $.getJSON('/cart.js', function(cart) {
            setTimeout(function(){ 
                if(cart.items.length > 0){
                    $.each( cart.items, function( key, value ) {
                    console.log(value);
                    if(value.product_id == '5503506251932'){
                        
                        if(value.price == 629){
                            
                            $('.'+value.variant_id+' #description').text('Refills every 6 weeks for $6.29');
                        } else {
                           
                        }
                    }
                   
                    if(value.id == '40963674800284'){
                        console.log(cart);
                            if(value.quantity == '2'){
                                setTimeout(function(){
                                    var total = cart.items_subtotal_price - 580;
                                    var subtotal = cart.items_subtotal_price - 580;
                                    $("#discount-cart").text('-'+Shopify.formatMoney(580))
                                    $("#subtotal-cart").text(Shopify.formatMoney(11020))
                                    $(".total-cart").text(Shopify.formatMoney(11020));
                                }, 1000);
                            } else if(value.quantity == '4'){
                                var total = cart.items_subtotal_price - 2320;
                                var subtotal = cart.items_subtotal_price - 2320;
                                $("#discount-cart").text('-'+Shopify.formatMoney(2320))
                                $("#subtotal-cart").text(Shopify.formatMoney(20880))
                                $(".total-cart").text(Shopify.formatMoney(20880));
                            }
                        } else {
                        
                        }
                        if(value.id == '37554090377372'){
                            if(value.price == 629){
                                addToCartDeliver();
                            }
                        }
                    }); 
                }else{
                    $(".cart-sidebar-body-fully").hide();
                    $(".cart-sidebar-body-empty").show().css("display","flex");
                    $(".cart-sidebar-footer").addClass("cart-sidebar-footer-empty");
                }
            }, 300);    
            $("#subtotal-cart").text(Shopify.formatMoney(cart.items_subtotal_price))
            $(".total-cart").text(Shopify.formatMoney(cart.total_price));
        });
        $("body").addClass("modal-open");
        $(".overlay-cart").fadeIn();
        $(".cart-sidebar").addClass("active");
      });
      function openCart2(){
         
        $.getJSON('/cart.js', function(cart) {
            $.each( cart.items, function( key, value ) {
                if(value.id == '37554090377372'){
                    if(value.price == 629){
                        addToCartDeliver();
                        $(".contain-cart-header").click();
                        return false;
                    } else {
                        $(".contain-cart-header").click();
                        return false;
                    }
                } else {
                    /*$(".contain-cart-header").click();
                    return false;*/
                    window.location.href = 'https://onephysion.com/cart';
               }
            });
        });
       //$(".contain-cart-header").click();
      }
     function openCart(){
         
        $.getJSON('/cart.js', function(cart) {
            $.each( cart.items, function( key, value ) {
                if(value.id == '37554090377372'){
                    if(value.price == 629){
                        addToCartDeliver();
                        $(".contain-cart-header").click();
                        return false;
                    } else {
                        $(".contain-cart-header").click();
                        return false;
                    }
                } else {
                    /*$(".contain-cart-header").click();
                    return false;*/
                    window.location.href = 'https://onephysion.com/cart';
               }
            });
        });
       //$(".contain-cart-header").click();
      }
      function removeThis(id) { 
        var id = $(this).data('id');   
       $.post('/cart/update.js', 'updates['+id+']=0');
       
       setTimeout(function(){ 
            jQuery.getJSON('/cart.js', function(cart) {
            $('.number-cart-header').html(cart.item_count);
            
           $('.item-cart'+id).hide('slow')
           //$('.btn-design1 span').html(Shopify.formatMoney(cart.total_price));
           $(".subtotal-cart").text(Shopify.formatMoney(cart.items_subtotal_price))
           console.log(cart.item_count);
           console.log(typeof(cart.item_count));
           
        } );
        }, 300);
        setTimeout(() => {
          $.getJSON("/cart.js", function (t) {
              $("#subtotal-cart").text(Shopify.formatMoney(cart.items_subtotal_price));
              $(".total-cart").text(Shopify.formatMoney(cart.total_price));
              if(t.item_count == 0 || t.item_count == "0"){
                $(".box-form-footer-cart").hide();
                $('.link-store').addClass("cart-empty")
               //  $('.menu-slide').removeClass('active');
               //  $('.content-layout, body').removeClass('modal-open');
               //  $('.content-layout').removeClass('modal-open-cart');
               //  $('.overflow-menu-header').fadeOut();
                $(".content-empty-cart").fadeIn();
                $(".menu-no-empty-cart .btn-design2").addClass("btn-disabled")
              }
          })
      }, 700)
        
    }
    $("#form_product").submit(function (e) { 
        e.preventDefault();
        addItemProduct("form_product");
    });

    $("#form_product2").submit(function (e) { 
        e.preventDefault();
        addItemProduct2("form_product2");
    });

    $(".input-box-sign-up-content input[type=email]").keyup(function() {
        var input = $(this);

        if( input.val() == "" ) {
          input.removeClass( "active" );
        }else{
            input.addClass( "active" );
        }  
    });

    $(window).scroll(function (event) {
        var sectionIds = $(".section-custom1");
        if(sectionIds.length != 0){
            sectionIds.each(function(){
    
                var containerOffset = $(this).prev().offset().top;
                var containerHeight = $(this).prev().outerHeight();
                var containerBottom = containerOffset + containerHeight;
                var scrollPosition = $(document).scrollTop();
        
                if($(window).scrollTop() >= $(this).prev().offset().top + $(this).prev().outerHeight() - window.innerHeight){
                    $(this).removeClass("animate-section")
                }
        
        
            });
        }
    })
    // $(".btn-custom-accordion").click(function (e) { 
    //     if($(this).hasClass("active")){
    //         $(this).closest(".card-custom1").find(".collapse").slideUp()
    //         $(this).removeClass("active")
    //     }else{
    //         $(this).closest(".accordion").find(".btn-custom-accordion").removeClass("active")
    //         $(this).closest(".accordion").find(".collapse").slideUp()
    //         $(this).closest(".card-custom1").find(".collapse").slideDown()
    //         $(this).addClass("active")
    //     }
    // });
    var gelblasterCarousel = new Swiper('.accessories-carousel', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 18,
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
                slidesPerView: 3.2
            },
            1200: {
                slidesPerView: 3.2
            },
            1500: {
                slidesPerView: 3.2
            },
            1600: {
                slidesPerView: 3.2
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var gelblasterCarouse2 = new Swiper('.accessories-carousel2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 5,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5
            },
            480: {
                slidesPerView: 2.5
                
            },
            768: {
                slidesPerView: 3.5
            },
            991: {
                slidesPerView: 3.4
            },
            1300: {
                slidesPerView: 3.9
            },
            1800: {
                slidesPerView: 3.9
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var gelblasterCarouse3 = new Swiper('.accessories-carousel3', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 1,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 15,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                centeredSlides: true,
                
            },
            768: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 3
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
    var gelblasterCarouse4 = new Swiper('.accessories-carousel4', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 5,
        breakpoints: {
            0: {
                slidesPerView: 1.9
            },
            480: {
                slidesPerView: 2.5
            },
            768: {
                slidesPerView: 3.8
            },
            991: {
                slidesPerView: 5
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var gelblasterCarouse6 = new Swiper('.accessories-carousel6', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 1.2,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 2.5,
                centeredSlides: true,
            },
            991: {
                slidesPerView: 3
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
    var physionCarousel6 = new Swiper('.product-carousel-3', {
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

    $(".colorSelect").change(function (e) { 
        e.preventDefault();
        if($(this).val() == 39643194589370){
            physionCarousel6.slideTo(0)
        }else{
            physionCarousel6.slideTo(3)
        }
    });
    
    var swiper = new Swiper(".swiper-marquee", swiperOptions);
    var swiper = new Swiper(".swiper-marquee2", swiperOptions);

    /* var timeline = new TimelineMax();
    timeline.from(".animate-section-text-init", .5, {
        y:15,
        opacity: .5
    },0)
    .from(".animate-section-text-init2", .75, {
        y:20,
        opacity: .5
    },0)

    gsap.registerPlugin(ScrollTrigger);
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.animate-section').forEach((el, index) => { 
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
      var physionCarousel7 = new Swiper('.product-carousel-5', {
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
    /*$(document).ready(function(){
        $('.count').prop('disabled', true);
           /*$(document).on('click','.plus',function(){
            $('.count').val(parseInt($('.count').val()) + 1 );
        });
        $(document).on('click','.minus',function(){
            $('.count').val(parseInt($('.count').val()) - 1 );
                if ($('.count').val() == 0) {
                    $('.count').val(1);
                }
            });
     });*/
    
});