window.Squarespace.onInitialize(Y, function() {

  var isGallery = document.querySelectorAll('.summary-item-list-container.sqs-gallery-container')[0];

  if (typeof(isGallery) != 'undefined' && isGallery != null){

    var svgArrow = globalParamsDetraformTestimonials.svgIcon;

    document.querySelectorAll('.summary-item-list-container.sqs-gallery-container').forEach(function(thisListGalleryContainer){
      thisListGalleryContainer.closest('section').classList.add('section-detraform-testimonials');
      thisListGalleryContainer.classList.add('swiper-container');
    });

    document.querySelectorAll('.sqs-gallery-design-list .summary-item-list').forEach(function(thisListGallery){

      thisListGallery.classList.add('swiper-wrapper');
      thisListGallery.querySelectorAll('.summary-item').forEach(function(nodeSlide){
        nodeSlide.classList.add('swiper-slide');

      });

      thisListGallery.insertAdjacentHTML('beforebegin', '<div class="slider-control"><div class="slider-control-inner"><div class="swiper-button-prev-custom"><figure>'+svgArrow+'</figure></div><div class="swiper-button-next-custom"><figure>'+svgArrow+'</figure></div></div></div>');

    });

      //initialize swiper when document ready
      var mySwiper = new Swiper ('.swiper-container',{
        loop: false,
        navigation: true,
        autoplay: false,
        slidesPerView: 1,
        autoHeight: false,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
          preloadImages: false,
          updateOnImagesReady: false
        }
      });

      setTimeout(function(){
        mySwiper.updateAutoHeight();  
      }, 300);
    }
  })
