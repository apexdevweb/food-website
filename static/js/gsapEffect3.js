gsap.registerPlugin(ScrollTrigger, SplitText);
let tlD = gsap.timeline();
let firstTitle = new SplitText(".chmpgne__title__first", {
  type: "chars",
});
let secondTitle = new SplitText(".chmpgne__title__second", {
  type: "words",
});

document.addEventListener("DOMContentLoaded", () => {
  const sectionChamp = gsap.utils.toArray(".chmpgne__item");
  // Scroll animation pour les sections
  let scrollTween = gsap.to(sectionChamp, {
    xPercent: -100 * (sectionChamp.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".chmpgne__container",
      pin: true,
      scrub: 0.5,
      snap: 1 / (sectionChamp.length - 1),
      start: "top top",
      end: 3000,
    },
  });

  // Titre principale champagne animation
  tlD.from(firstTitle.chars, {
    x: 50,
    opacity: 0,
    duration: 0.5,
    autoAlpha: 0,
    stagger: {
      amount: 5,
      from: "right",
    },
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".chmpgne__title__first",
      start: "top top",
      end: 1500,
      scrub: 4,
      markers: true,
    },
  });
  // Titre secondaire champagne animation
  tlD.from(secondTitle.words, {
    x: -50,
    opacity: 0,
    duration: 2,
    autoAlpha: 0,
    stagger: {
      amount: 5,
      from: "right",
    },
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".chmpgne__title__second",
      start: "top top",
      end: 1500,
      scrub: 4,
    },
  });
});
