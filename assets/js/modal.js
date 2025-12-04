// Modal module for handling product detail modals

export function initModal() {
  // Create modal element if it doesn't exist
  let modal = document.getElementById('product-modal');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">&times;</button>
        <img class="modal-image" src="" alt="" />
        <div class="modal-body">
          <h2 class="modal-title"></h2>
          <span class="price modal-price"></span>
          <p class="modal-description"></p>
          <a href="order.html" class="btn btn-primary modal-order-btn">Order Now</a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  return modal;
}

export function openModal(product) {
  const modal = document.getElementById('product-modal') || initModal();
  
  // Populate modal with product data
  const modalImage = modal.querySelector('.modal-image');
  const modalTitle = modal.querySelector('.modal-title');
  const modalPrice = modal.querySelector('.modal-price');
  const modalDescription = modal.querySelector('.modal-description');
  const modalOrderBtn = modal.querySelector('.modal-order-btn');

  modalImage.src = product.image;
  modalImage.alt = product.alt || product.name;
  modalTitle.textContent = product.name;
  modalPrice.textContent = product.price_display || `$${product.pricePerLb.toFixed(2)} / ${product.unit}`;
  modalDescription.textContent = product.description;
  
  // Update order button link with product name
  const encodedName = encodeURIComponent(product.name);
  modalOrderBtn.href = `order.html?item=${encodedName}`;

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

export function closeModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

export function setupModalListeners() {
  const modal = initModal();
  
  // Close button
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', closeModal);
  
  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}
