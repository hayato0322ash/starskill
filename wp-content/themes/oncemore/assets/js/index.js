
	jQuery(function ($) {
    // フォント読み込み
      (function(d) {
        var config = {
          kitId: 'kil4jyw',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    // フォント読み込み


    // 読み込みフェードインの設定
    $(function() {
      var fadeSpeed = 1000;
      $('body')
       .css({opacity: '0.0'})
       .animate({opacity: '1'}, fadeSpeed);
      });

       // swiperの設定
      var mySwiper = new Swiper ('.swiper-container', {
      // effect: "fade",
       loop: true,
       slidesPerView: 2,
       spaceBetween: 0,
       centeredSlides : true,
       pagination: '.swiper-pagination',
       nextButton: '.button-next',
       prevButton: '.button-prev',
       breakpoints: {
        4000: {
          slidesPerView:2.3,
          spaceBetween: 0,
          centeredSlides : true
        },
        1930: {
          slidesPerView:2.3,
          spaceBetween: 0,
          centeredSlides : true
        },
       500: {
         slidesPerView:1,
         spaceBetween: 0,
         centeredSlides : true
       },
       380: {
         slidesPerView:1,
         spaceBetween: 0,
         centeredSlides : true
       },
       320: {
         slidesPerView:1,
         spaceBetween: 0,
         centeredSlides : true
       }
       }
   });
   var mySwiper = new Swiper ('.swiper-container2', {
     effect: "fade",
     loop: true,
     slidesPerView: 1,
     spaceBetween: 0,
     centeredSlides : true,
     pagination: '.swiper-pagination',
     nextButton: '.button-next',
     prevButton: '.button-prev',
     breakpoints: {
      4000: {
        slidesPerView:1,
        spaceBetween: 0,
        centeredSlides : true
      },
      1930: {
        slidesPerView:1,
        spaceBetween: 0,
        centeredSlides : true
      },
     500: {
       slidesPerView:1,
       spaceBetween: 0,
       centeredSlides : true
     },
     380: {
       slidesPerView:1,
       spaceBetween: 0,
       centeredSlides : true
     },
     320: {
       slidesPerView:1,
       spaceBetween: 0,
       centeredSlides : true
     }
     }
 });

  //  rellaxの設定
  //  var rellax = new Rellax('.rellax');

  //  menutrigger設定

  $('.menu-trigger').click(function(){
    

    var $answer = $('.gNav-res');
    if( $answer.hasClass('open')){

       $answer.removeClass('open');
       $answer.css({"transition":"0.4s","opacity":"0","z-index":"0"});
       $(this).toggleClass('active');

    } else {

      $answer.addClass('open');
      $answer.css({"transition":"0.4s","opacity":"1","z-index":"99999999"});
      

      $(this).toggleClass('active');
    };
    
  });

  $(".menu-trigger").click(function(){

    if( $(this).hasClass('menu-2')){

      $(this).removeClass('menu-2');
      $(this).addClass('menu-1');
      

   } else {

    $(this).removeClass('menu-1');
    $(this).addClass('menu-2');

   }; 
   if( $(".res-menu-color0").hasClass('res-menu-color0_click')){
    $(".res-menu-color0_click").removeClass('res-menu-color0_click');
    } else {
    $(".res-menu-color0").addClass('res-menu-color0_click');
    }; 
   if( $(".res-menu-color1").hasClass('res-menu-color1_click')){
    $(".res-menu-color1_click").removeClass('res-menu-color1_click');
    } else {
    $(".res-menu-color1").addClass('res-menu-color1_click');
    }; 
    if( $(".res-menu-color2").hasClass('res-menu-color2_click')){
      $(".res-menu-color2_click").removeClass('res-menu-color2_click');
      } else {
      $(".res-menu-color2").addClass('res-menu-color2_click');
      }; 
      if( $(".res-menu-color3").hasClass('res-menu-color3_click')){
        $(".res-menu-color3_click").removeClass('res-menu-color3_click');
        } else {
        $(".res-menu-color3").addClass('res-menu-color3_click');
        }; 
        if( $(".res-menu-color4").hasClass('res-menu-color4_click')){
          $(".res-menu-color4_click").removeClass('res-menu-color4_click');
          } else {
          $(".res-menu-color4").addClass('res-menu-color4_click');
          }; 
          if( $(".res-menu-color5").hasClass('res-menu-color5_click')){
            $(".res-menu-color5_click").removeClass('res-menu-color5_click');
            } else {
            $(".res-menu-color5").addClass('res-menu-color5_click');
            }; 


  });

  // トップスクロール

  $(".top-scroll").click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

// スクロールエフェクト






  


});