//This function contains the html for the header and footer and inserts it into every page
export function loadHeaderAndFooter(){
    const headerHTML=`
    <header class="site-header">
      <div class="container header-row">
        <div class="brand">
          <img src="assets/images/utah_logo.png" alt="Utah Farms and Flowers logo" class="logo">
          <h1>Utah Farms & Flowers</h1>
        </div>

        <!--Mobile Menu Button -->
        <button id="menu-toggle" class="menu-toggle" aria-expanded="false" aria-controls="primary-nav">
          ≡
        </button>


        <nav class="nav" id="primary-nav" aria-label="Primary navigation">
          <a href="index.html">Home</a>
          <a href="wholesale.html">Wholesale</a>
          <a href="retail.html">Retail</a>
          <a href="contact.html">Contact</a>
          <a href="order.html">Order</a>
          <a href="about.html">About</a>
        </nav>
      </div>
    </header>
    `;
    

    const footerHTML=`
    <footer id="site-footer" class="site-footer">
      <div class="container footer-grid">
        <div>
          <h4>Contact Us</h4>
          <p>
            Email:
            <a href="mailto:orders@Utahfarmandflowers.email">
              order@utahfarmandflowers.example
            </a><br />
            Bluffdale, UT 84065
          </p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <p>
            <a href="#">Facebook</a><br />
            <a href="#">Instagram</a><br />
            <a href="#">Twitter</a><br />
            <a href="#">TikTok</a><br />
            <a href="#">Pinterest</a><br />
            <a href="#">YouTube</a><br />
            <a href="#">LinkedIn</a><br />
            <a href="#">Yelp</a>
          </p>
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
