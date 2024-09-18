//section names
let isSection = document.querySelectorAll('.section-name');
if (typeof (isSection) != 'undefined' && isSection != null) {
  isSection.forEach(function (thisBlock) {
    let sectionName = thisBlock.getAttribute('data-name');
    thisBlock.closest('section').classList.add(sectionName + '-section');
    thisBlock.closest('.sqs-block-code').style.display = 'none';
  });
}

//blog item banner
var isBlogItem = document.querySelector('.blog-item-wrapper');
if (isBlogItem) {
  var blogItemImgSrc = document.head.querySelector("[property='og:image']").content;
  var blogItemsColection = document.querySelector(".collection-type-blog-basic-grid.view-item, .collection-type-blog-side-by-side.view-item");

  if (blogItemsColection) {
    let blogItemTopWrapper = blogItemsColection.querySelector('.blog-item-top-wrapper');

    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    newImg.src = blogItemImgSrc;

    newDiv.appendChild(newImg);

    let titleElement = blogItemTopWrapper.querySelector('.blog-item-top-wrapper .blog-item-title');
    titleElement.insertAdjacentElement('afterend', newDiv);
  }
}

//a href to blog items
var summaryItems = document.querySelectorAll('.summary-item, .collection-type-blog-basic-grid.view-list .entry');

summaryItems.forEach(function (item) {
  var link = item.querySelector('.summary-thumbnail-outer-container a, .image-wrapper');

  if (link) {
    var href = link.getAttribute('href');
    var newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', href);
    newAnchor.classList.add('custom-link'); // Add a class for styling
    item.appendChild(newAnchor);
  }
});
//grab bg color
// Create a new div element
var newDiv = document.createElement('div');

// Add styles to the new div
newDiv.style.position = 'absolute';
newDiv.style.width = '100%';
newDiv.style.height = '120px';
newDiv.style.top = 0; // Adjust the position as needed

// Append the new div to #footer-section .page-section
var footerSection = document.querySelector('#footer-sections .page-section');
footerSection.style.position = 'relative'; // Ensure the parent is positioned
footerSection.appendChild(newDiv);

// Get the background color of the last .page-section in #sections
var lastSectionBg = document.querySelector('#sections > .page-section:last-child .section-background');
var bgColor = window.getComputedStyle(lastSectionBg, null).getPropertyValue('background-color');

// Apply the background color to the new div
newDiv.style.backgroundColor = bgColor;