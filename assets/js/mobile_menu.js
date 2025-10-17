const mblCtnr = document.querySelector(".mobile__barre");
const navContent = document.querySelector(".navbar__container");

mblCtnr.addEventListener("click", () => {
  navContent.classList.toggle("view");
});
