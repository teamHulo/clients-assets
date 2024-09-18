  /* tabs plugin */
  $(document).ready(function(){
    if ( $( ".tab-name" ).length ) {
      $('<div class="tabs-wrapper"><div class="tabs-wrapper-inner"></div></div>').insertAfter('.Index > .Index-page:nth-child(1)');
      $('body').addClass('page-with-tabs');
      /* create tabs */
      $('.tab-name').each(function(){
        var curItem = $(this); 
        curItem.closest('.Index-page').attr('data-tab-name', curItem.text()).addClass('tab-section')
        $('.tabs-wrapper-inner').append(curItem);
      })
      setTimeout(function(){
            $('.tabs-wrapper .tab-name:nth-child(1)').click();
      },100)

      /* get click on each tab */
      $('.tabs-wrapper .tab-name:not(.active)').on('click', function(){
        var curItem = $(this);
        $('.tabs-wrapper .tab-name').removeClass('active-tab')
        $(this).addClass('active-tab');
        /* hide previous tab */
        $('.Site-inner .Index-page').removeClass('visible-tab').removeClass('animate-tab')
        /* show current tab */
        $('.Site-inner').find('.Index-page[data-tab-name="'+curItem.text()+'"]').addClass('visible-tab');
        setTimeout(function(){
          $('.Site-inner').find('.Index-page[data-tab-name="'+curItem.text()+'"]').addClass('animate-tab');
        },100)
      })
    }
  })
