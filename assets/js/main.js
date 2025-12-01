import { loadHeaderAndFooter } from "./headerFooter.js";
import { loadProduce } from "./produce.js";
import { loadHero } from "./hero.js"


function init(){
// ==================================================
// WAYS TO SHOP ACCORDION FUNCTIONALITY
// ----------------------------------------------
// Handles click events for each .shop-toggle button.
// When clicked, toggles the .open class on its
// corresponding .shop-item to reveal or hide content.
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.shop-toggle'); // Select all toggle buttons

  //Loads header, footer, and hero banner.
  loadHeaderAndFooter(); 
  if(document.querySelector("#hero")){
    loadHero();
  }
  if (document.querySelector("#produce-grid")) {
    loadProduce();
  }
  

  toggles.forEach((button) => {
    // Resolve related elements once per button
    const item = button.closest('.shop-item');             // Parent container for the pair
    const panel = item ? item.querySelector('.shop-panel') : null; // Associated panel

    // Initialize ARIA and focus behavior based on initial state (.open or not)
    const startsOpen = item && item.classList.contains('open'); // Supports pre-opened state via markup
    button.setAttribute('aria-expanded', String(!!startsOpen)); // true if open
    if (panel) {
      panel.setAttribute('aria-hidden', String(!startsOpen));   // hidden when closed
      if (!startsOpen) {
        panel.setAttribute('inert', '');                        // remove from tab order when closed
      } else {
        panel.removeAttribute('inert');                         // focusable when open
      }
    }

    // Existing click behavior + synchronized ARIA/inert updates
    button.addEventListener('click', () => {
      const wasExpanded = button.getAttribute('aria-expanded') === 'true'; // Previous state

      // Toggle the open/closed class for styling
      item.classList.toggle('open');

      // Update ARIA attributes for accessibility
      button.setAttribute('aria-expanded', String(!wasExpanded)); // Reflect expanded/collapsed state
      if (panel) {
        panel.setAttribute('aria-hidden', String(wasExpanded));   // Sync panel visibility state

        // Manage inert to prevent focus from entering hidden panels
        if (wasExpanded) {
          panel.setAttribute('inert', '');                        // Now closed -> remove from tab order
        } else {
          panel.removeAttribute('inert');                         // Now open  -> allow interaction
        }
      }
    });
  });
});
}
init();

// CONTACT FORM HANDLER
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.hidden = false;
    contactForm.reset();
  });
}



// WHOLESALE FORM HANDLER
const wholesaleForm = document.getElementById("wholesale-form");
const wholesaleSuccess = document.getElementById("wholesale-success");

if (wholesaleForm) {
  wholesaleForm.addEventListener("submit", function (event) {
    event.preventDefault();

    wholesaleSuccess.hidden = false;
    wholesaleForm.reset();
  });
}