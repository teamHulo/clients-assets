  (function(){
    var forcedMenuFrom = document.querySelectorAll('[data-forced-menu]')[0].getAttribute('data-forced-menu');

    var winWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    function getWindowWidth(){
      var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(+forcedMenuFrom > winWidth || +forcedMenuFrom == 0){
        document.querySelectorAll('body')[0].classList.add('forced-mobile-menu');
      }else{
        document.querySelectorAll('body')[0].classList.remove('forced-mobile-menu');
      } 
    }
    window.addEventListener("resize", getWindowWidth);
    getWindowWidth();
  }());
