//section names
let isSection = document.querySelectorAll('.section-name');
if (typeof (isSection) != 'undefined' && isSection != null) {
  isSection.forEach(function (thisBlock) {
    let sectionName = thisBlock.getAttribute('data-name');
    thisBlock.closest('section').classList.add(sectionName + '-section');
    thisBlock.closest('.sqs-block-code').style.display = 'none';
  });
}

if (document.body.classList.contains('collection-type-blog-masonry') && document.body.classList.contains('view-item')) {
  // Find the first .gallery-block within .blog-item-content-wrapper
  var galleryBlock = document.querySelector('.blog-item-content-wrapper .gallery-block');

  // Find the .blog-item-top-wrapper
  var topWrapper = document.querySelector('.blog-item-top-wrapper');

  // Check if both elements exist
  if (galleryBlock && topWrapper) {
    // Insert the .gallery-block into the .blog-item-top-wrapper
    topWrapper.appendChild(galleryBlock);
  }
}