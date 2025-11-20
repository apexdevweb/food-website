const paths = document.querySelectorAll("#mySVG path");

paths.forEach((path) => {
  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 3,
    ease: "power1.inOut",
  });
});