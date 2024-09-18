/* Vertical Transition Plugin */

if (window.bannerSectionTransition_plugin && window.bannerSectionTransition_plugin.excluded && Array.isArray(window.bannerSectionTransition_plugin.excluded) && window.bannerSectionTransition_plugin.excluded.length > 0)
for (var i = 0; i < window.bannerSectionTransition_plugin.excluded.length; i++) window.location.pathname.indexOf(window.bannerSectionTransition_plugin.excluded[i]) > -1 && document.body.classList.add("excluded-page");

if (document.body.className !== 'excluded-page'){

  document.body.insertAdjacentHTML("afterbegin", '<div class="transition-overlay"></div>');

  var gsap_method = gsap.timeline(),
  transitionOverlay = document.querySelector(".transition-overlay"),    
  siteWrapper = document.getElementById("siteWrapper") || document.querySelector(".Site");

  (transitionOverlay.style.visibility = "visible"),

  gsap_method
  .fromTo(transitionOverlay, 1.2, { y: "100%" }, { y: "0%", ease: "Power4.easeOut" }, 0)   
  .to(transitionOverlay, 1, { y: "-100%", ease: "Power4.easeOut", onComplete: function () {transitionOverlay.style.visibility = "hidden";}, }, 1)

  .to(siteWrapper,
    { 
      keyframes: [
        { y: "100%", ease: "Power4.easeOut", duration: 0 },
        { y: "20em", ease: "Power4.easeOut", duration: 0, delay: 1 },
        {
          y: "0",
          ease: "Power4.easeOut",
          duration: 1,
          clearProps: "transform",
          onStart: function () {
            window.scrollTo(0, 0), (siteWrapper.style.opacity = "1");
          },
        },
      ],
      onComplete: function () {
        document.body.classList.add("transition-overlay-hidden");
      },
    },        
    0
  );
}

/* Vertical Transition Plugin */
