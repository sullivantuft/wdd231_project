import { loadHeaderAndFooter } from "./headerFooter.js";
import { loadProduce } from "./produce.js";
import { loadHero } from "./hero.js";

// ===============================
// INITIALIZE PAGE
// ===============================
function init() {

  // Load header and footer immediately
  loadHeaderAndFooter();

  // Load hero if the element exists on this page
  if (document.querySelector("#hero")) {
    loadHero();
  }

  // Load featured produce on index.html
  if (document.querySelector("#produce-grid")) {
    loadProduce();
  }

  // Accordion logic (Wholesale/Retail pages)
  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.shop-toggle');

    toggles.forEach((button) => {
      const item = button.closest('.shop-item');
      const panel = item ? item.querySelector('.shop-panel') : null;

      const startsOpen = item && item.classList.contains('open');

      button.setAttribute('aria-expanded', String(!!startsOpen));

      if (panel) {
        panel.setAttribute('aria-hidden', String(!startsOpen));

        if (!startsOpen) {
          panel.setAttribute('inert', '');
        } else {
          panel.removeAttribute('inert');
        }
      }

      button.addEventListener('click', () => {
        const wasExpanded = button.getAttribute('aria-expanded') === 'true';

        item.classList.toggle('open');
        button.setAttribute('aria-expanded', String(!wasExpanded));

        if (panel) {
          panel.setAttribute('aria-hidden', String(wasExpanded));

          if (wasExpanded) {
            panel.setAttribute('inert', '');
          } else {
            panel.removeAttribute('inert');
          }
        }
      });
    });
  });
}

//===============
// call INIT
//============

init();

if (document.querySelector("#hero")) {
  loadHero();
}

// ===============================
// CONTACT FORM HANDLER
// ===============================
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.hidden = false;
    contactForm.reset();
  });
}

// ===============================
// WHOLESALE FORM HANDLER
// ===============================
const wholesaleForm = document.getElementById("wholesale-form");
const wholesaleSuccess = document.getElementById("wholesale-success");

if (wholesaleForm) {
  wholesaleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    wholesaleSuccess.hidden = false;
    wholesaleForm.reset();
  });
}

// ===============================
// RETAIL SUBSCRIBE FORM HANDLER
// ===============================
const subscribeForm = document.getElementById("subscribe-form");
const subscribeSuccess = document.getElementById("subscribe-success");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    subscribeSuccess.hidden = false;
    subscribeForm.reset();
  });
}
