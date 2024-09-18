let isSection = document.querySelectorAll('.section-name');
if (typeof (isSection) != 'undefined' && isSection != null) {
  isSection.forEach(function (thisBlock) {
    let sectionName = thisBlock.getAttribute('data-name');
    thisBlock.closest('section').classList.add(sectionName + '-section');
    thisBlock.closest('.sqs-block-code').style.display = 'none';
  });
}
var selectors = ['.newsletter-form-header-description', '.newsletter-form-footnote'];

selectors.forEach(function (selector) {
  var elements = document.querySelectorAll(selector);

  elements.forEach(function (element) {
    var paragraph = element.querySelector('p');
    if (paragraph.textContent.trim() === '') {
      element.classList.add('remove');
    }
  });
});

var elements = document.querySelectorAll('.tiles-team-section .image-slide-title');

elements.forEach(function (element) {
  var text = element.textContent.trim();
  var parts = text.split('|');

  // Clear existing content
  element.innerHTML = '';

  // Create new elements
  var title = document.createElement('h4');
  title.textContent = parts[0].trim();
  element.appendChild(title);

  if (parts.length > 1) {
    var description = document.createElement('p');
    description.textContent = parts[1].trim();
    element.appendChild(description);
  }
});

//blog item banner
var isBlogItem = document.querySelector('.blog-item-wrapper');

if (isBlogItem) {
  var blogItemImgSrc = document.head.querySelector("[property='og:image']").content;
  var blogItemsColection = document.querySelector(".collection-type-blog-basic-grid.view-item, .collection-type-blog-side-by-side.view-item");

  if (blogItemsColection) {
    let blogItemTopWrapper = blogItemsColection.querySelector('.blog-item-top-wrapper');

    let newDiv = document.createElement('div');
    newDiv.classList.add('background'); // Adding the class 'background' to the new div

    let newImg = document.createElement('img');
    newImg.src = blogItemImgSrc;

    newDiv.appendChild(newImg);

    let titleElement = blogItemTopWrapper.querySelector('.blog-item-top-wrapper .blog-item-title');
    titleElement.insertAdjacentElement('afterend', newDiv);
  }
}


var isBlogItem = document.querySelector('.blog-item-wrapper');
if (isBlogItem) {
  var blogItemsColection = document.querySelector(".collection-type-blog-basic-grid.view-item");

  if (blogItemsColection) {
    let blogItemInnerWrapper = blogItemsColection.querySelector('.blog-item-inner-wrapper');

    // Get the current URL
    var currentUrl = window.location.pathname;

    // Remove all after the second '/'
    var firstSlashIndex = currentUrl.indexOf('/', 1);
    var hrefValue = currentUrl.substring(0, firstSlashIndex);

    // Create the <a> element
    let newLink = document.createElement('a');
    newLink.href = hrefValue;
    newLink.textContent = 'Back to blog'; // Set the inner text

    // Prepend the <a> element as the first child of .blog-item-inner-wrapper
    blogItemInnerWrapper.insertBefore(newLink, blogItemInnerWrapper.firstChild);
  }
}