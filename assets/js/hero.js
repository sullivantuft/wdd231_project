export function loadHero(){
    const heroContainer = document.querySelector("#hero");
    if (!heroContainer) return;

    heroContainer.innerHTML = 
    ` <img
        src="assets/images/hero.jpg"
        alt="Garden fresh produce from Utah Farm and Flowers"
        class="hero-img"
      />
      <div class="hero-copy">
        <h2 class="hero-title">Fresh, Local, Sustainable</h2>
        <p class="hero-text">
          Utah Farm and Flowers is a family owned and operated urban farm located in Utah.
          We specialize in growing high-quality, fresh produce and flowers using sustainable
          farming practices. Our mission is to provide local restaurants and consumers with
          the freshest, healthiest food possible while minimizing our environmental impact.
          We grow pesticide free greens, herbs, and flowers using efficient techniques to
          maximize space and reduce water usage. We are committed to supporting our community
          by providing fresh, healthy food options and promoting sustainable agriculture.
        </p>
        <a class="btn btn-primary" href="#wholesale">Shop Now</a>
        <div class="badges">
          <span class="badge">Pesticide Free</span>
          <span class="badge">Sustainably Grown</span>
          <span class="badge">Locally Owned</span>
        </div>
      </div>
    `;
}   