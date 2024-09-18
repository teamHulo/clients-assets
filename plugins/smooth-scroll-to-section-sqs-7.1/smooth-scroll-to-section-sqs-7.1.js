(function(){


function clickFire(elem){
  if (elem.onclick) {
    elem.onclick();
  } else if (elem.click) {
    elem.click();
  }
}

function simulateMenuClick(closeSecetor){
  clickFire(closeSecetor);
}

document.querySelectorAll('[data-section-anchor]').forEach(function(sectionAnchor) {
  var parentSection =  sectionAnchor.closest("section");
  sectionAnchor.closest(".sqs-block-code").classList.add('code-block-with-anchor');
  parentSection.setAttribute('id', sectionAnchor.getAttribute('data-section-anchor'));
  parentSection.setAttribute('data-scroll-offset', sectionAnchor.getAttribute('data-offset'));
});

document.querySelectorAll('a[href*="-anchor"]').forEach(function(anchorLink) {
  anchorLink.addEventListener("click", function(event) {
    var sectionId = anchorLink.getAttribute('href').split('#')[1];
    console.log(sectionId);
    var scrollOffset = document.querySelectorAll('[data-section-anchor="'+sectionId+'"]')[0].getAttribute('data-offset') || 0;
    EPPZScrollTo.scrollVerticalToElementById(sectionId, scrollOffset);
  })
});



document.querySelectorAll(".header-menu-nav-item a[href*='#']")[0].addEventListener("click", function() {
  simulateMenuClick(document.querySelectorAll(".header-burger-btn.burger .burger-inner")[0])
});

}());
