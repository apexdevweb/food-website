// gsap.registerPlugin(ScrollTrigger, SplitText);
// let tlD = gsap.timeline();
// let firstTitle = new SplitText(".chmpgne__title__first", {
//   type: "chars",
// });
// let secondTitle = new SplitText(".chmpgne__title__second", {
//   type: "words",
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const sectionChamp = gsap.utils.toArray(".chmpgne__item");
//   // Scroll animation pour les sections
//   let scrollTween = gsap.to(sectionChamp, {
//     xPercent: -100 * (sectionChamp.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".chmpgne__container",
//       pin: true,
//       scrub: 0.5,
//       snap: 1 / (sectionChamp.length - 1),
//       start: "top top",
//       end: 3000,
//     },
//   });

//   // Titre principale champagne animation
//   tlD.from(firstTitle.chars, {
//     x: 50,
//     opacity: 0,
//     duration: 0.5,
//     autoAlpha: 0,
//     stagger: {
//       amount: 5,
//       from: "right",
//     },
//     scrollTrigger: {
//       containerAnimation: scrollTween,
//       trigger: ".chmpgne__title__first",
//       start: "top top",
//       end: 1200,
//       scrub: 3,
//       markers: true,
//     },
//   });
//   // Titre secondaire champagne animation
//   tlD.from(secondTitle.words, {
//     x: -50,
//     opacity: 0,
//     duration: 2,
//     autoAlpha: 0,
//     stagger: {
//       amount: 5,
//       from: "right",
//     },
//     scrollTrigger: {
//       containerAnimation: scrollTween,
//       trigger: ".chmpgne__title__second",
//       start: "top top",
//       end: 1200,
//       scrub: 3,
//     },
//   });
// });
gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener("DOMContentLoaded", () => {

  const articles = gsap.utils.toArray(".chmpgne__item");

  // Animation scroll horizontal
  const scrollTween = gsap.to(articles, {
    xPercent: -100 * (articles.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".chmpgne__container",
      pin: true,
      scrub: 0.7,
      snap: 1 / (articles.length - 1),
      start: "top top",
      end: "+=3000",
    },
  });

  // Boucle sur chaque article
  articles.forEach((article, index) => {
    
    const first = article.querySelector(".chmpgne__title__first");
    const second = article.querySelector(".chmpgne__title__second");

    // SplitText PAR ARTICLE
    const firstSplit = new SplitText(first, { type: "chars" });
    const secondSplit = new SplitText(second, { type: "words" });

    // Timeline spécifique à l’article
    const tl = gsap.timeline({
      scrollTrigger: {
        containerAnimation: scrollTween,    // synchronisé avec scroll horizontal
        trigger: article,                   // déclenche à l’arrivée de l’article
        start: "left center",               // LE BON MOMENT
        end: "right center",
        scrub: 1.5,
      }
    });

    // Animation titre principal
    tl.from(firstSplit.chars, {
      x: 60,
      opacity: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: "power3.out",
    })

    // Animation titre secondaire
    .from(secondSplit.words, {
      x: -60,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.3"); // léger overlap
  });

});
