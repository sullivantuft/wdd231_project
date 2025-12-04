// Reusable form submission modal

function ensureFormModal() {
  let modal = document.getElementById("feedback-modal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "feedback-modal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="feedback-modal-title">
        <button class="modal-close" aria-label="Close dialog">&times;</button>
        <div class="modal-body">
          <h2 id="feedback-modal-title">Thank you</h2>
          <p id="feedback-modal-message"></p>
          <button type="button" class="btn btn-primary" id="feedback-modal-ok">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector(".modal-close");
    const okBtn = modal.querySelector("#feedback-modal-ok");

    const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeModal);
    okBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  return modal;
}

export function showFormModal(message, title = "Thank you") {
  const modal = ensureFormModal();

  const titleEl = modal.querySelector("#feedback-modal-title");
  const messageEl = modal.querySelector("#feedback-modal-message");

  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const okBtn = modal.querySelector("#feedback-modal-ok");
  if (okBtn) {
    okBtn.focus();
  }
}
