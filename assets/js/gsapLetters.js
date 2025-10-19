gsap.registerPlugin(ScrollTrigger, SplitText);
//curseur souris
const cursor = document.querySelector(".cursor__effect");
const allClickEl = document.querySelectorAll(".mobile__item__sub");
const cursTxt = document.querySelector(".cursor__txt");
if (cursTxt.textContent === "Clicks") {
  cursTxt.textContent = "Click";
} else {
  cursTxt.textContent = "View";
}

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.7,
    ease: "power2.out",
  });
});
allClickEl.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursTxt.textContent = "Click";
    link.addEventListener("click", () => {
      if (cursor.classList.contains("add__flash__cursor")) {
        cursor.classList.remove("add__flash__cursor");
      } else {
        cursor.classList.add("add__flash__cursor");
      }
    });
    gsap.to(cursor, {
      opacity: 1,
      scale: 1.8,
      duration: 0.3,
      ease: "elastic.out(1, 0.4)",
    });
  });

  link.addEventListener("mouseleave", () => {
    cursTxt.textContent = "View";
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
let tl = gsap.timeline();
let primaryTitle = new SplitText(".primary__title", {
  type: "chars, words, lines",
});
let secondaryTitle = new SplitText(".secondary__title", {
  type: "chars, words, lines",
});
tl.from(primaryTitle.chars, {
  y: 50,
  scale: 0,
  autoAlpha: 0,
  duration: 0.6,
  opacity: 0,
  stagger: {
    amount: 2,
    from: "bottom",
  },
  ease: "power2.inOut",
});
tl.from(secondaryTitle.chars, {
  y: -50,
  transformOrigin: "center center",
  scale: 0,
  autoAlpha: 0,
  duration: 0.6,
  opacity: 0,
  stagger: {
    amount: 2,
    from: "top",
  },
  ease: "power2.inOut",
});
//splitText
const btnTrigg = document.getElementById("btntrigg");
const navBan = document.querySelectorAll(".navbar__papper__item");
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
    filter: "blur(25px)",
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
    filter: "blur(25px)",
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
  tl.from(navBan, {
    x: -150,
    transformOrigin: "left",
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: {
      each: 0.15,
      from: "start",
    },
    // ease: "power2.inOut",
    ease: "elastic.out(1, 0.9)",
    // ease: "back.out(1.8)",
  });
});
//scrollTrigger
const mainCtnrA = document.getElementById("ctnr1");
const artclTitle = new SplitText("#t1", { type: "chars" });
const lettrine = document.getElementById("letters");
const bigLetterine = document.getElementById("big1");
const aboutImgA = document.getElementById("aboutImg1");
const aboutCaptionA = document.getElementById("aboutCaption1");

tl.from(mainCtnrA, {
  x: -50,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#ctnr1",
    start: "0% center",
    end: "30% bottom",
    scrub: 4,
    // markers: true,
  },
  ease: "power2.inOut",
});
tl.from(artclTitle.chars, {
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
    trigger: "#t1",
    start: "10% center",
    end: "35% bottom",
    scrub: 4,
    // markers: true,
  },
  ease: "power2.inOut",
});
tl.from(lettrine, {
  x: 50,
  transformOrigin: "right",
  opacity: 0,
  duration: 2,
  filter: "blur(25px)",
  stagger: {
    amount: 5,
    from: "right",
  },
  scrollTrigger: {
    trigger: "#letters",
    start: "top center",
    end: "80% 80%",
    scrub: 5,
    // markers: true,
  },
  ease: "power2.inOut",
});
tl.from(bigLetterine, {
  x: 50,
  transformOrigin: "right",
  opacity: 0,
  duration: 3,
  stagger: {
    amount: 1,
    from: "righ",
  },
  scrollTrigger: {
    trigger: "#big1",
    start: "25% 20%",
    end: "bottom bottom",
    scrub: 2,
    // markers: true,
  },
  ease: "power2.inOut",
});
tl.from(aboutImgA, {
  y: 150,
  transformOrigin: "bottom",
  opacity: 0,
  duration: 8,
  filter: "blur(25px)",
  stagger: {
    amount: 1,
    from: "bottom",
  },
  scrollTrigger: {
    trigger: "#aboutImg1",
    start: "top center",
    end: "bottom bottom",
    scrub: 2,
    // markers: true,
  },
  ease: "power2.inOut",
});
tl.from(aboutCaptionA, {
  x: 50,
  transformOrigin: "right",
  opacity: 0,
  duration: 3,
  filter: "blur(25px)",
  stagger: {
    amount: 1,
    from: "right",
  },
  scrollTrigger: {
    trigger: "#aboutCaption1",
    start: "top bottom",
    end: "50% bottom",
    scrub: 3,
    // markers: true,
  },
  ease: "power2.inOut",
});
//galerie image
window.addEventListener("load", () => {
  const images = document.querySelectorAll(".image__container__item");
  if (!images.length) return;
  gsap.set(images, { position: "absolute", top: 0, left: 0 });
  const tl2 = gsap.timeline({
    x: 50,
    scrollTrigger: {
      trigger: ".image__container",
      start: "top top",
      end: "+=" + images.length * 800,
      scrub: 3,
      pin: true,
    },
  });
  images.forEach((img, i) => {
    img.style.zIndex = i + 1;
    const appearAt = i * 1.8;
    tl2.fromTo(
      img,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 },
      appearAt
    );
    tl2.to(img, { opacity: 0, scale: 1.1, duration: 1 }, appearAt + 1);
  });
});
