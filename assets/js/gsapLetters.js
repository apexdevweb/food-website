gsap.registerPlugin(ScrollTrigger, SplitText);
//curseur souris
const cursor = document.querySelector(".cursor__effect");
const allClickEl = document.querySelectorAll(".lnk");
const allImgScroll = document.querySelectorAll(".image__container__item");
const cursTxt = document.querySelector(".cursor__txt");
if (cursTxt.textContent === "Clicks") {
  cursTxt.textContent = "Click";
} else if (cursTxt.textContent === "Scroll") {
  cursTxt.textContent = "Scroll";
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
    gsap.to(cursor, {
      opacity: 1,
      scale: 1.4,
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
allImgScroll.forEach((scrollImg) => {
  scrollImg.addEventListener("mouseover", () => {
    cursTxt.textContent = "Scroll";
  });
  scrollImg.addEventListener("mouseleave", () => {
    cursTxt.textContent = "view";
  });
});

///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
//splitText
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
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
//scrollTrigger
const mainCtnrA = document.getElementById("ctnr1");
const artclTitle = new SplitText("#t1", { type: "chars" });
const lettrine = document.getElementById("letters");
const bigLetterine = document.getElementById("big1");
const aboutImgA = document.getElementById("aboutImg1");
const aboutCaptionA = document.getElementById("aboutCaption1");
const galerieTitle = new SplitText("#t5", { type: "chars" });

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
  duration: 9,
  filter: "blur(25px)",
  stagger: {
    amount: 1,
    from: "bottom",
  },
  scrollTrigger: {
    trigger: "#aboutImg1",
    start: "top center",
    end: "bottom bottom",
    scrub: 3,
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
tl.from(galerieTitle.chars, {
  x: -50,
  transformOrigin: "left",
  scale: 0,
  opacity: 0,
  duration: 8,
  filter: "blur(25px)",
  stagger: {
    amount: 6,
    from: "random",
  },
  scrollTrigger: {
    trigger: "#t5",
    start: "top center",
    end: "bottom bottom",
    scrub: 3,
    // markers: true,
  },
  ease: "power2.inOut",
});
window.addEventListener("load", () => {
  const images = document.querySelectorAll(".image__container__item");
  if (!images.length) return;
  //Positionnement de base
  gsap.set(images, { position: "absolute", top: 0, left: 0 });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".image__container",
      start: "top top",
      end: "+=" + images.length * 800, // durée du scroll
      scrub: 3,
      pin: true,
      //markers: true, // pour debug
    },
  });
  images.forEach((img, i) => {
    img.style.zIndex = i + 1;
    const appearAt = i * 1.8;
    //Sélection du texte dans chaque image
    const text = img.querySelector(".descript__img");
    //Apparition de l'image
    tl2.fromTo(
      img,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 },
      appearAt
    );
    //Apparition du texte légèrement décalée
    tl2.fromTo(
      text,
      { y: 30, opacity: 0, filter: "blur(5px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      },
      appearAt + 0.3 // petit décalage par rapport à l’image
    );
    //Disparition de l'image
    tl2.to(img, { opacity: 0, scale: 1.1, duration: 1 }, appearAt + 1);
    //Disparition du texte aussi
    tl2.to(
      text,
      { y: -20, opacity: 0, filter: "blur(5px)", duration: 0.8 },
      appearAt + 0.8
    );
  });
});
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
///////////#######################################################################################/////////
//contact
const arrowContact = document.getElementById("arrowA");
const contactCtnr = document.querySelector(".form__A");
const contactCtnrItem = document.querySelectorAll(".form__A__item");
const arrowReserve = document.getElementById("arrowB");
const reservCtnr = document.querySelectorAll(".form__B");

arrowContact.addEventListener("click", () => {
  arrowContact.classList.toggle("arrow__mov__A");
  contactCtnr.classList.toggle("deploy__form");
  contactCtnrItem.forEach((inputItem) => {
    tl.from(inputItem, {
      y: -50,
      rotate: 25,
      scale: 0,
      opacity: 0,
      duration: 0.3,
      filter: "blur(10px)",
      stagger: 0.01,
      ease: "power5.out",
    });
  });
});

// arrowReserve.addEventListener("click", () => {});
