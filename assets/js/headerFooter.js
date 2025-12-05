//This function contains the html for the header and footer and inserts it into every page
export function loadHeaderAndFooter(){
    const headerHTML=`
    <header class="site-header">
  <div class="container header-row">

    <!-- Left: LOGO (anchored left, does not move) -->
    <div class="logo-wrapper">
      <picture>
        <source srcset="assets/images/utah_logo_300.webp" type="image/webp">
        <img src="assets/images/utah_logo.png" alt="Utah Farms and Flowers logo" class="logo" height="60" decoding="async">
      </picture>
    </div>

    <!-- Centered TITLE above the nav links -->
    <div class="brand-center">
      <h1 class="brand-title">
        <span class="utah-script">Utah</span>
        <span class="farms-flowers">Farms & Flowers</span>
      </h1>

      <!-- Navigation directly BELOW the title -->
      <nav class="nav" id="primary-nav" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="wholesale.html">Wholesale</a>
        <a href="retail.html">Retail</a>
        <a href="contact.html">Contact</a>
        <a href="order.html">Order</a>
        <a href="about.html">About</a>
      </nav>
    </div>

    <!-- Right: Mobile Menu Button -->
    <button id="menu-toggle" class="menu-toggle" aria-expanded="false" aria-controls="primary-nav">
      ≡
    </button>

  </div>
</header>

    `;
    

    const footerHTML=`
    <footer id="site-footer" class="site-footer">
      <div class="container footer-grid">
        <div>
          <h3>Contact Us</h3>
          <p>
            Email:
            <a href="mailto:orders@Utahfarmandflowers.email">
              order@utahfarmandflowers.example
            </a><br />
            Bluffdale, UT 84065
          </p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <ul class="footer-social">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Yelp</a></li>
          </ul>
        </div>

        <div class="copy">
          <small>&copy; <span id="year"></span> Utah Farm and Flowers. All rights reserved.</small>
        </div>
      </div>

      <p class="credit">WDD231 Final Project by Sully and Lora</p>
    </footer>
  `;
    
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    document.getElementById("year").textContent = new Date().getFullYear();
}


// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
  });
});
