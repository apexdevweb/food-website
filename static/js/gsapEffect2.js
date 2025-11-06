gsap.registerPlugin(ScrollTrigger, SplitText);
let tlD = gsap.timeline();
let miniTitle = new SplitText(".mini__fig__title", {
  type: "words",
});
tlD.from(miniTitle.words, {
  y: 50,
  scale: 0,
  autoAlpha: 0,
  duration: 0.8,
  opacity: 0,
  stagger: {
    amount: 2,
    from: "bottom",
  },
  ease: "power2.inOut",
});
const miniFigFirstStep = document.querySelectorAll(".mini__fig");
tlD.from(miniFigFirstStep, {
  opacity: 0,
  duration: 4,
  stagger: 0.3,
});
const miniFig = document.querySelectorAll(".mini__fig");
tlD.to(miniFig, {
  opacity: 0,
  duration: 5,
  stagger: 0.8,
  scrollTrigger: {
    trigger: ".mini__fig",
    start: "top 18%",
    end: "bottom bottom",
    scrub: 3,
    // markers: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = gsap.utils.toArray(".sect");

  // Scroll animation pour les sections
  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".grid__wrapper",
      pin: true,
      scrub: 0.5,
      snap: 1 / (sections.length - 1),
      start: "top top",
      end: 3000,
    },
  });

  // Logo animation
  gsap.to(".logo, h3", {
    fontSize: "2.5rem",
    letterSpacing: "5px",
    top: "4rem",
    lineHeight: "40px",
    scrollTrigger: {
      trigger: ".logo",
      start: "top top",
      end: 1500,
      scrub: 3,
    },
  });

  // Line animation
  gsap.to(".line", {
    height: "15rem",
    scrollTrigger: {
      trigger: ".line",
      scrub: 0.5,
      start: "center center",
      end: 2000,
    },
  });

  // Animations pour les élément personnage
  document.querySelectorAll(".character").forEach((el) => {
    // Caption animation
    const caption = el.querySelector(".caption");
    if (caption) {
      gsap.to(caption, {
        x: 0,
        y: 0,
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: caption,
          start: "top bottom",
          end: "+=1000",
          scrub: 0.5,
        },
      });
    }

    // Quote animation
    const quote = el.querySelector(".quote");
    if (quote) {
      gsap.to(quote, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: quote,
          start: "top bottom",
          end: "+=20%",
          scrub: 0.5,
        },
      });
    }

    // animation pour le nom
    const nickname = el.querySelector(".nickname");
    if (nickname) {
      gsap.to(nickname, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: nickname,
          start: "top bottom",
          end: "+=10%",
          scrub: 0.5,
        },
      });
    }

    // animation pour les blocks
    const block = el.querySelector(".block");
    if (block) {
      gsap.to(block, {
        x: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: block,
          start: "top bottom",
          end: "+=" + window.innerWidth,
          scrub: 0.5,
        },
      });
    }

    // animation de limage
    const img = el.querySelector("img");
    if (img) {
      gsap.to(img, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: img,
          start: "top bottom",
          end: "+=50%",
          scrub: 0.5,
        },
      });
    }

    //hugtext
    const hugeText = el.querySelector(".hugtext");
    if (hugeText) {
      gsap.to(hugeText, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: hugeText,
          start: "top bottom",
          end: "+=100%",
          scrub: 0.5,
        },
      });
    }
  });
});

//script pour la compatibilité avec GSAP
// const lenis = new Lenis();

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 500);
// });

// gsap.ticker.lagSmoothing(0);
