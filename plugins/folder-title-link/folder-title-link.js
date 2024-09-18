  function createLinkForSub(parentElem, linkSub, textSub){
    var stringLink = '<a href="'+linkSub+'">'+textSub+'</a>';
   parentElem.insertAdjacentHTML('afterbegin', stringLink);
  }
  document.querySelectorAll('.header-nav-item--folder').forEach(function(buttonLoop) {
buttonLoop.classList.add('custom-folder');
    var currentLink = buttonLoop.querySelectorAll('.header-nav-folder-title')[0].getAttribute('href');
    var currentText = buttonLoop.querySelectorAll('.header-nav-folder-title')[0].textContent;
    createLinkForSub(buttonLoop, currentLink, currentText);
});
