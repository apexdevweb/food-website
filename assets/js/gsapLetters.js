gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let tl = gsap.timeline();
let primaryTitle = new SplitText(".primary__title", {
  type: "chars, words, lines",
});
tl.from(primaryTitle.chars, {
  y: 50,
  scale: 0,
  autoAlpha: 0,
  duration: 1.2,
  opacity: 0,
  stagger: {
    amount: 2,
    from: "bottom",
  },
  ease: "power2.inOut",
});
//splitText
const btnTrigg = document.getElementById("btntrigg");
btnTrigg.addEventListener("click", () => {
  let txtA = new SplitText(".navbar__itemA", {
    type: "chars, words, lines",
  });
  let txtB = new SplitText(".navbar__itemB", {
    type: "chars, words, lines",
  });
  let txtC = new SplitText(".mobile__container__sub", {
    type: "words, lines",
  });
  gsap.from(txtA.chars, {
    x: 350,
    scale: 0,
    autoAlpha: 0,
    duration: 0.9,
    opacity: 0,
    stagger: {
      amount: 2,
      from: "right",
    },
    ease: "power2.inOut",
  });
  gsap.from(txtB.chars, {
    x: -350,
    scale: 0,
    autoAlpha: 0,
    duration: 0.9,
    opacity: 0,
    stagger: {
      amount: 2,
      from: "left",
    },
    ease: "power2.inOut",
  });
  gsap.from(txtC.words, {
    y: 250,
    scale: 0,
    autoAlpha: 0,
    duration: 1.5,
    opacity: 0,
    stagger: {
      amount: 0.5,
      from: "bottom",
    },
    ease: "power2.inOut",
  });
});
//scrollTrigger
const mainCtnrA = document.getElementById("ctnr1");
const artclTitle = new SplitText("#t1", { type: "chars" });
const lettrine = document.getElementById("letters");
const bigLetterine = document.getElementById("big1");

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ctnr1",
    start: "20% center",
    end: "10% bottom",
    scrub: 4,
    // markers: true,
  },
  ease: "power2.inOut",
});
tl2.from(mainCtnrA, {
  x: -50,
  opacity: 0,
  duration: 5,
});
tl2.from(artclTitle.chars, {
  x: -150,
  scale: 0,
  opacity: 0,
  duration: 8,
  stagger: {
    amount: 5,
    from: "random",
  },
});
tl2.from(lettrine, {
  x: 50,
  transformOrigin: "right",
  opacity: 0,
  duration: 0.8,
  stagger: {
    amount: 14,
    from: "right",
  },
});
tl2.from(bigLetterine, {
  y: 50,
  transformOrigin: "bottom",
  opacity: 0,
  duration: 0.8,
  stagger: {
    amount: 1,
    from: "bottom",
  },
});
