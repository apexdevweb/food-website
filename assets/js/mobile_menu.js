const mblCtnr = document.querySelector(".mobile__barre");
const navContent = document.querySelector(".navbar__container");
const navBanner = document.querySelector(".navbar__papper");

mblCtnr.addEventListener("click", () => {
  navContent.classList.toggle("view");
  if (navBanner.classList.contains("view__banner")) {
    navBanner.classList.remove("view__banner");
  } else {
    navBanner.classList.add("view__banner");
  }
});
