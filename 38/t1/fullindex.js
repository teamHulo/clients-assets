//section names
let isSection = document.querySelectorAll('.section-name');
if (typeof (isSection) != 'undefined' && isSection != null) {
  isSection.forEach(function (thisBlock) {
    let sectionName = thisBlock.getAttribute('data-name');
    thisBlock.closest('section').classList.add(sectionName + '-section');
    thisBlock.closest('.sqs-block-code').style.display = 'none';
  });
}


var getBtns = document.querySelectorAll('.gallery-section .gallery-caption-content');

getBtns.forEach(function (curItem) {
  var theText = curItem.textContent.split('|');

  // Clear the current text
  curItem.textContent = '';

  // Create and append the title-inner div
  var titleInnerDiv = document.createElement('div');
  titleInnerDiv.className = 'title-inner';
  curItem.appendChild(titleInnerDiv);

  // Append heading and subheading if available
  if (theText[0] !== '') {
    var headingP = document.createElement('h1');
    headingP.className = 'heading';
    headingP.textContent = theText[0];
    titleInnerDiv.appendChild(headingP); // Prepend the heading
  }

  if (theText.length > 1 && theText[1] !== '') {
    var subheadingP = document.createElement('p');
    subheadingP.className = 'subheading';
    subheadingP.textContent = theText[1];
    titleInnerDiv.appendChild(subheadingP); // Append the subheading
  }
});

var getBtns2 = document.querySelectorAll('.gallery-block .sqs-gallery-block-grid .image-slide-title');

getBtns2.forEach(function (curItem) {
  var theText = curItem.textContent.split('|');

  // Clear the current text
  curItem.textContent = '';

  // Create and append the title-inner div
  var titleInnerDiv = document.createElement('div');
  titleInnerDiv.className = 'title-inner';
  curItem.appendChild(titleInnerDiv);

  // Append heading and subheading if available
  if (theText[0] !== '') {
    var headingP = document.createElement('p');
    headingP.className = 'heading';
    headingP.textContent = theText[0];
    titleInnerDiv.appendChild(headingP); // Prepend the heading
  }

  if (theText.length > 1 && theText[1] !== '') {
    var subheadingP = document.createElement('p');
    subheadingP.className = 'subheading';
    subheadingP.textContent = theText[1];
    titleInnerDiv.appendChild(subheadingP); // Append the subheading
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const userItemsListSection = document.querySelector('.user-items-list-section');

  if (userItemsListSection) {
    const contentWrapper = userItemsListSection.querySelector('.content-wrapper');

    if (contentWrapper) {
      const listItems = contentWrapper.querySelectorAll('.list-item');
      const slidesData = Array.from(listItems).map(item => {
        const descriptionElement = item.querySelector('.list-item-content__description');
        const strongElement = descriptionElement.querySelector('strong');
        let strongText = '';
        let remainingText = descriptionElement.innerHTML;

        if (strongElement) {
          strongText = strongElement.innerHTML;
          strongElement.remove(); // Remove the strong element from the description
          remainingText = descriptionElement.innerHTML;
        }

        return {
          title: item.querySelector('.list-item-content__title').textContent,
          strongText: strongText,
          remainingText: remainingText,
          imgSrc: item.querySelector('.list-item-media-inner img').getAttribute('data-src')
        };
      });

      // Hide existing content
      const existingContent = contentWrapper.querySelector('.content');
      if (existingContent) {
        existingContent.style.display = 'none';
      }

      // Creating Swiper containers for images and text
      const createSwiperContainer = (className) => {
        const container = document.createElement('div');
        container.className = `swiper-container ${className}`;
        const wrapper = document.createElement('div');
        wrapper.className = 'swiper-wrapper';
        container.appendChild(wrapper);
        return { container, wrapper };
      };

      const { container: imageSwiperContainer, wrapper: imageWrapper } = createSwiperContainer('image-swiper');
      const { container: textSwiperContainer, wrapper: textWrapper } = createSwiperContainer('text-swiper');

      slidesData.forEach(data => {
        // Image Slide
        const imageSlide = document.createElement('div');
        imageSlide.classList.add('swiper-slide');
        imageSlide.innerHTML = `<div class="image-wrapper"><img src="${data.imgSrc}" alt=""></div>`;
        imageWrapper.appendChild(imageSlide);

        // Text Slide
        const textSlide = document.createElement('div');
        textSlide.classList.add('swiper-slide');

        const topTextWrapper = document.createElement('div');
        topTextWrapper.className = 'top-text-wrapper';
        if (data.strongText) {
          topTextWrapper.innerHTML += `<h3>${data.strongText}</h3>`;
        }
        topTextWrapper.innerHTML += `<p>${data.remainingText}</p>`;

        // Process the title and wrap in bottom-text-wrapper
        const bottomTextWrapper = document.createElement('div');
        bottomTextWrapper.className = 'bottom-text-wrapper';
        const titleParts = data.title.split('|');
        titleParts.forEach(part => {
          const para = document.createElement('p');
          para.innerHTML = part.trim();
          bottomTextWrapper.appendChild(para);
        });

        textSlide.innerHTML = `<div class="info">${topTextWrapper.outerHTML}${bottomTextWrapper.outerHTML}</div>`;
        textWrapper.appendChild(textSlide);
      });

      contentWrapper.appendChild(imageSwiperContainer);
      contentWrapper.appendChild(textSwiperContainer);

      // Create and append navigation arrows
      const nextButton = document.createElement('div');
      nextButton.classList.add('swiper-button-next');
      const prevButton = document.createElement('div');
      prevButton.classList.add('swiper-button-prev');
      textSwiperContainer.appendChild(nextButton);
      textSwiperContainer.appendChild(prevButton);

      // Initialize Swiper Instances
      const imageSwiper = new Swiper('.image-swiper', {
        effect: 'fade',
        // other settings
      });

      const textSwiper = new Swiper('.text-swiper', {
        // other settings
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        controller: {
          control: imageSwiper
        }
      });

      // Synchronize image swiper with text swiper
      imageSwiper.controller.control = textSwiper;
    }
  }
});
