// Automatically change the year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}



// ==================================================
// WAYS TO SHOP ACCORDION FUNCTIONALITY
// ----------------------------------------------
// Handles click events for each .shop-toggle button.
// When clicked, toggles the .open class on its
// corresponding .shop-item to reveal or hide content.
// ==================================================
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.shop-toggle'); // Select all toggle buttons

  toggles.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.shop-item'); // Find parent container
      item.classList.toggle('open');             // Toggle "open" class
    });
  });
});
