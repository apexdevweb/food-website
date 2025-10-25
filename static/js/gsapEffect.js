gsap.registerPlugin(ScrollTrigger, SplitText);
//aside
const asideH5A = new SplitText("#t9", { type: "chars" });
tl.from(asideH5A.chars, {
  x: -150,
  scale: 0,
  opacity: 0,
  duration: 8,
  filter: "blur(25px)",
  stagger: {
    amount: 5,
    from: "random",
  },
  scrollTrigger: {
    trigger: "#t9",
    start: "top center",
    end: "bottom bottom",
    scrub: 4,
    // markers: true,
  },
  ease: "power2.inOut",
});
const asideH5B = new SplitText("#t10", { type: "chars" });
tl.from(asideH5B.chars, {
  x: 150,
  scale: 0,
  opacity: 0,
  duration: 8,
  filter: "blur(25px)",
  stagger: {
    amount: 5,
    from: "random",
  },
  scrollTrigger: {
    trigger: "#t10",
    start: "top center",
    end: "bottom bottom",
    scrub: 4,
    // markers: true,
  },
  ease: "power2.inOut",
});
const gridContainer = document.querySelectorAll(".grid_item");
tl.from(gridContainer, {
  delay: 8,
  y: 80,
  scaleY: 0,
  transformOrigin: "bottom center",
  opacity: 0,
  duration: 8,
  filter: "blur(25px)",
  stagger: {
    amount: 5,
    from: "bottom",
  },
  scrollTrigger: {
    trigger: "grid_item",
    start: "center center",
    end: "bottom bottom",
    scrub: 5,
    //   markers: true,
  },
  ease: "power2.inOut",
});
const barrets = document.querySelectorAll(".barrets__container__item");

gsap.from(barrets, {
  x: -100, // petit glissement depuis la gauche
  scaleX: 0, // grandissent horizontalement
  transformOrigin: "left center", // étirement depuis la gauche
  opacity: 0,
  filter: "blur(15px)",
  duration: 4,
  stagger: {
    amount: 2.5,
    from: "left",
  },
  ease: "power2.out", // plus fluide
  scrollTrigger: {
    trigger: ".barrets__container",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 2.5,
    // markers: true,
  },
});
