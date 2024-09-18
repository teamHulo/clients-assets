$(()=>{
  $('.mobile__sevice-item').click(function(){
    $(this).toggleClass('active');
  });
  $('.burger__menu').click(function(){
      $('.nav').toggleClass('active');
      $('body').toggleClass('active');
      $(this).toggleClass('active');

  });
  $('.nav__link').click(function(){
    console.log(1);
      $('.nav').removeClass('active');
      $('body').removeClass('active');

  });
function sw(){
      const swiper = new Swiper('.amazing__slider', {
        effect: 'fade',
        loop: true,
        onlyExternal: false,
        allowTouchMove: false,
        speed: 0,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        fadeEffect: {
          crossFade: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      
      const swiper1 = new Swiper('.feedbacks__slider', {
          effect: 'fade',
          speed:0,
          loop: true,
          fadeEffect: {
            crossFade: false,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
      });
    }
    sw();
    $(window).resize(()=>{
      sw();
    });
});

$(()=>{
    function addKonverKitForm(){
      console.log(1);
        $('.form__item .creating__items-wrap').html(' <script data-script="fk" async data-uid="f1d0fdc220" src="https://sunny-teacher-604.ck.page/f1d0fdc220/index.js"></script>');
        console.log(1);
    }


    addKonverKitForm();
    addStyleKonvertKit();

    function addStyleKonvertKit(){
       setTimeout(addSK, 100);
         setTimeout(addSK, 500);
         setTimeout(addSK, 1000);
         setTimeout(addSK, 1500);
         setTimeout(addSK, 2000);
         setTimeout(addSK, 3000);
         setTimeout(addSK, 4000);
         setTimeout(addSK, 5000);
    }
    function addSK(){
      const submitList = document.querySelectorAll('.seva-form');
      console.log('Lenght: ' + submitList.length);
      $('.formkit-header h2').html('Want to stay updated');
      $('.formkit-subheader').text('Sign up for our newsletter to receive updates');
      $('.formkit-submit').addClass('btn');
      $('.formkit-submit').html(` subscribe <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 1H15.5M15.5 1V16M15.5 1L0.5 16" stroke="white" stroke-width="2"/>
      </svg> <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 1H15.5M15.5 1V16M15.5 1L0.5 16" stroke="white" stroke-width="2"/>
      </svg>`);
      $('.formkit-submit svg').wrapAll('<div class="span-svg-wrap"></div>');
      $('.formkit-submit .formkit-spinner').remove();
      $('.formkit-submit span').remove();
      $('.formkit-guarantee').remove();
      $('.formkit-powered-by-convertkit-container').remove();
    }
   

    $(window).resize(()=>{
      $('script[src="https://f.convertkit.com/ckjs/ck.5.js"]').remove();
      addKonverKitForm();
      addStyleKonvertKit();
      setTimeout(addSK, 100);
      setTimeout(addSK, 500);
      setTimeout(addSK, 1000);
      setTimeout(addSK, 1500);
      setTimeout(addSK, 2000);
      setTimeout(addSK, 3000);
      setTimeout(addSK, 4000);
      setTimeout(addSK, 5000);

    });
});



/****** style iframe */

// Iframe link CSS inserting
$(()=>{
  document.querySelector(".form-wrapper").style.opacity = "0";
  //$('.form-wrapper').css('opacity','0');
  window.onload = () => {
    let iframeName = document.querySelector("iframe");
    let iframeContent = iframeName.contentDocument;
    iframeContent.head.innerHTML = iframeContent.head.innerHTML + `<link rel="stylesheet" href="css/fonts.css"> <link rel="stylesheet" href="css/style.css">`;
    setTimeout(function(){
      document.querySelector(".form-wrapper").style.opacity = "1";
      //$('.form-wrapper').css('opacity','1');
    },200);
  
  
    $('iframe').contents().find('#input_2').addClass('btn');
    $('iframe').contents().find('body').prepend(`<div class="bg" style="position:fixed; width:100vw; height: 100vh;  background:  url('img/r1.png'); background-size: cover; background-position: center; z-index: -1;"></div>`);
    $('iframe').contents().find('#input_2').append(`<div class="span-svg-wrap"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 1H15.5M15.5 1V16M15.5 1L0.5 16" stroke="white" stroke-width="2"/>
    </svg> <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 1H15.5M15.5 1V16M15.5 1L0.5 16" stroke="white" stroke-width="2"/>
    </svg></div>`);
  }
})


/*************** */
