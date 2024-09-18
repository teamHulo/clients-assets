if (window.bannerSectionTransition_plugin && window.bannerSectionTransition_plugin.excluded && Array.isArray(window.bannerSectionTransition_plugin.excluded) && window.bannerSectionTransition_plugin.excluded.length > 0)
for (var i = 0; i < window.bannerSectionTransition_plugin.excluded.length; i++) window.location.pathname.indexOf(window.bannerSectionTransition_plugin.excluded[i]) > -1 && document.body.classList.add("excluded-page");

if (document.body.className !== 'excluded-page'){

  document.body.insertAdjacentHTML("afterbegin", '<div class="transition-overlay"></div>');

  var gsap_method = gsap.timeline(),
  transitionOverlay = document.querySelector(".transition-overlay"),    
  siteWrapper = document.getElementById("siteWrapper") || document.querySelector(".Site");

  (transitionOverlay.style.visibility = "visible"),

  gsap_method
  .fromTo(transitionOverlay, { y: "-120%" }, { y: "0%", ease: "Power4.easeOut", duration: 1.1}, 0)   
  .to(transitionOverlay, { y: "100%", ease: "Power4.easeOut", duration: 1.3, onComplete: function () {transitionOverlay.style.visibility = "hidden";}, }, 0.7)

  .to(siteWrapper,
    { 
      keyframes: [
        { y: "100%", ease: "Power4.easeOut", duration: 0 },
        { y: "-20vh", ease: "Power4.easeOut", duration: 0.95, delay: 0 },
        {
          y: "0",
          ease: "Power4.easeOut",
          duration: 0.9,
          delay: 0.1,
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
