// Toppers carousel
document.addEventListener("DOMContentLoaded", function () {
  // Initialize carousels for both Class XII and Class X
  initializeCarousel(
    "inter-carousel",
    "inter-slides",
    "inter-prev",
    "inter-next",
    "inter-dots"
  );
  initializeCarousel(
    "high-school-carousel",
    "high-school-slides",
    "high-school-prev",
    "high-school-next",
    "high-school-dots"
  );
});

function initializeCarousel(
  carouselId,
  slidesContainerId,
  prevBtnId,
  nextBtnId,
  dotsContainerId
) {
  const carouselContainer = document.getElementById(carouselId);
  if (!carouselContainer) return;

  const slidesContainer = document.getElementById(slidesContainerId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const dotsContainer = document.getElementById(dotsContainerId);
  const slides = slidesContainer.querySelectorAll(".carousel-slide");
  if (slides.length === 0) return;

  let currentSlide = 0;
  let intervalId = null;

  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = `w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${
      index === 0 ? "bg-blue-600" : ""
    }`;
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("div");

  function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove("opacity-100", "visible", "z-10");
    slides[currentSlide].classList.add("opacity-0", "invisible", "z-0");
    dots[currentSlide].classList.remove("bg-blue-600");
    dots[currentSlide].classList.add("bg-gray-300");

    currentSlide = (slideIndex + slides.length) % slides.length;

    slides[currentSlide].classList.remove("opacity-0", "invisible", "z-0");
    slides[currentSlide].classList.add("opacity-100", "visible", "z-10");
    dots[currentSlide].classList.remove("bg-gray-300");
    dots[currentSlide].classList.add("bg-blue-600");
  }

  prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

  // Auto rotate when in view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        intervalId = setInterval(() => {
          goToSlide(currentSlide + 1);
        }, 4269);
      } else {
        clearInterval(intervalId);
      }
    },
    { threshold: 0.5 } // Adjust as needed
  );

  observer.observe(carouselContainer);
}
// Image popover

const images = document.querySelectorAll(".pop-image");
const popover = document.getElementById("popover");
const popoverImage = document.getElementById("popoverImage");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const src = image.getAttribute("data-popover-src");
    const alt = image.getAttribute("alt");

    popoverImage.setAttribute("src", src);
    popoverImage.setAttribute("alt", alt);
    popover.style.display = "grid";
  });
});

popover.addEventListener("click", () => {
  popover.style.display = "none";
});

popoverImage.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popover.style.display = "none";
  }
});
