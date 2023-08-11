$(document).ready(function () {
  const navbar = document.querySelector(".navbar");
  const scrollTrigger = 200;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollTrigger) {
      navbar.classList.add("sticky-on");
      navbar.classList.remove("tra");
    } else {
      navbar.classList.remove("sticky-on");
      navbar.classList.add("tra");
    }
  });

  function typeAnimation() {
    var typed = new Typed("#type-animation", {
      strings: [
        "My Name is <i> Mustafa Badr.</i>",
        "&amp; <i> I am a Full stack Python developer. </i>",
      ],
      typeSpeed: 70,
    });
  }
  typeAnimation();

  setInterval(typeAnimation, 10000);
});
