// Retail page - handles product card interactions (no modals)

document.addEventListener('DOMContentLoaded', () => {
  // Add click listeners to all product cards
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const productData = card.getAttribute('data-product');
      if (productData) {
        try {
          const product = JSON.parse(productData);
          const encodedName = encodeURIComponent(product.name);
          window.location.href = `order.html?item=${encodedName}`;
        } catch (error) {
          console.error('Error parsing product data:', error);
        }
      }
    });

    // Add keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Order ${card.querySelector('h3').textContent}`);
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
});
