import { gsap } from "gsap";
document.querySelector("#burger").addEventListener("click", () => {
  const tl = gsap.timeline();
  tl.to("#menu", {
    y: 0,
    borderRadius: 0,
    ease: "power3.in",
  });

  tl.from("#links > *, #moreStuff > a", {
    y: "-40px",
    opacity: 0,
  });
});
document.querySelector("#close").addEventListener("click", () => {
  gsap.to("#menu", {
    y: "-100%",
    borderRadius: "4px",
  });
});

// Root-only navbar scroll behavior
const isRoot = window.location.pathname === "/";
const navbar = document.querySelector("nav");

if (isRoot && navbar) {
  navbar.style.backgroundColor = "rgba(255, 255, 255, 0.17)";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.17)";
    }
  });
}
