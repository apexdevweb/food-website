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
    start: "80% 50%",
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
const asideAdress = new SplitText("#t11", { type: "words" });
tl.from(asideAdress.words, {
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
    trigger: "#t11",
    start: "top center",
    end: "bottom bottom",
    scrub: 5,
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
    start: "61% center",
    end: "bottom bottom",
    scrub: 5,
      // markers: true,
  },
  ease: "power2.inOut",
});
