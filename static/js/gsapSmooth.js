gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5, // inertie du scroll
  effects: true, // active data-speed et data-lag
});
