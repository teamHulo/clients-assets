  //section names
  let isSection = document.querySelectorAll('.section-name');
  if (typeof(isSection) != 'undefined' && isSection != null){
    isSection.forEach(function(thisBlock){
      let sectionName = thisBlock.getAttribute('data-name');
      thisBlock.closest('section').classList.add(sectionName+'-section');
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
  
      var divs = document.querySelectorAll(".user-items-list ");

    divs.forEach(function(div) {
        var anchor = div.querySelector("a[href='/team-section']");
        if (anchor) {
            // Add class 'team-section' to the parent '.page-section'
            var pageSection = div.closest('.page-section');
            if (pageSection) {
                pageSection.classList.add('team-section');
            }
            // Remove the <a> element
            anchor.parentNode.removeChild(anchor);
        }
    });

if (document.querySelector('.collection-type-portfolio-grid-basic')) {
  // If it exists, add a class to the body
  document.body.classList.add('portfolio-page');
}