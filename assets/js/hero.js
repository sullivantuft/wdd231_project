 
// ===============================
// HERO SECTION WITH CAROUSEL
// ===============================
export function loadHero() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  heroSection.innerHTML = `
    <div class="hero-carousel">

      <!-- Slide 1 -->
      <div class="hero-slide active"></div>

      <!-- Slide 2 -->
      <div class="hero-slide"></div>

      <!-- Slide 3 -->
      <div class="hero-slide"></div>

    </div>

    <div class="hero-content">
      <h1>Fresh. Local. Sustainable.</h1>
      <p>Premium produce grown year-round right here in Utah.</p>
    </div>
  `;
}


// ===============================
// HERO CAROUSEL ROTATION SCRIPT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // 5 seconds per slide
});
