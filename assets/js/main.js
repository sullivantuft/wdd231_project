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
      const item = button.closest('.shop-item');             // Find parent .shop-item container
      const panel = item.querySelector('.shop-panel');       // Find the associated panel element
      const expanded = button.getAttribute('aria-expanded') === 'true'; // Check current state

      // Toggle the open/closed class for styling
      item.classList.toggle('open');

      // Update ARIA attributes for accessibility
      button.setAttribute('aria-expanded', String(!expanded)); // Reflect expanded/collapsed state
      if (panel) {
        panel.setAttribute('aria-hidden', String(expanded));   // Sync panel visibility state
      }
    });
  });
});