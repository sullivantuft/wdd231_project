// ===============================
// HERO SECTION WITH CAROUSEL
// ===============================
export function loadHero() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  heroSection.innerHTML = `
    <div class="hero-carousel">

      <!-- Slide 1 farm scene -->
      <div class="hero-slide active"></div>

      <!-- Slide 2  farmers market-->
      <div class="hero-slide"></div>

      <!-- Slide 3 strawberry woman-->
      <div class="hero-slide"></div>

      <!-- Slide 4 grapes-->
      <div class="hero-slide"></div>
      
      <!-- Slide 5 farmer tending field -->
      <div class="hero-slide"></div>
      
      <!-- Slide 6 young caucasian couple -->
      <div class="hero-slide"></div>

    </div>

    <div class="hero-content">
      <h1>Fresh. Local. Sustainable.</h1>
      <p>Premium produce grown year-round right here in Utah.</p>
    </div>
  `;

  // ===============================
  // ASSIGN IMAGES TO SLIDES
  // ===============================
  const imagePaths = [
    "assets/images/farm_scene_compressed.webp",
    "assets/images/A_photograph_captures_a_farmers_market_scene_on_a.webp",
    "assets/images/strawberry_woman.webp",
    "assets/images/grapes.webp",
    "assets/images/A_photograph_captures_a_farmer_tending_to_a_field_.webp",
    "assets/images/A_photograph_captures_a_young_Caucasian_couple_har.webp"
  ];

  
  const slides = heroSection.querySelectorAll(".hero-slide");

  slides.forEach((slide, i) => {
    slide.style.backgroundImage = `url('${imagePaths[i % imagePaths.length]}')`;
    slide.style.backgroundSize = "cover";
    slide.style.backgroundPosition = "center";
  });
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

  setInterval(showNextSlide, 3000); // 3 seconds per slide
});
