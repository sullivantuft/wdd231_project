//This file is for order.html and is responsible for loading the header/footer, and rendering the order form with the products in the JSON file.
//It also calculates the total and saves the order information to local storage. It then creates a view all orders button that allows you
//to view all orders
import { loadHeaderAndFooter } from "./headerFooter.js";
import { showFormModal } from "./formModal.js";
loadHeaderAndFooter();

document.addEventListener("DOMContentLoaded", initOrderPage);

async function initOrderPage() {
  const sections = document.getElementById("product-sections");
  const totalDisplay = document.getElementById("order-total");

  if (!sections || !totalDisplay) {
    return;
  }
  const form = document.getElementById("order-form");

  //load produce from JSON
  const response = await fetch("assets/data/produce.json");
  const data = await response.json();

  const fruits = data.produce.filter((item) => item.category === "fruit");
  const vegetables = data.produce.filter(
    (item) => item.category === "vegetable" || !item.category
  );

  const renderItem = (item) => `
        <div class="product-item" data-name="${item.name}">
        <img src="${item.image}" alt="${item.alt}" class="produce-img" />
        <h4 class="produce-name">${item.name}</h4>
        <p class="produce-price">
          $${item.pricePerLb.toFixed(2)} / lb — sold by ${item.unit}
        </p>
        <label for="${item.name
          .toLowerCase()
          .replace(/\s+/g, "-")}">Pounds (lbs)</label>
        <input
          id="${item.name.toLowerCase().replace(/\s+/g, "-")}"
          name="${item.name}"
          class="qty-input"
          type="number"
          min="0"
          step="1"
          placeholder="0"
          data-price="${item.pricePerLb}"
        />
      </div>
  `;

  const renderSection = (title, items) => {
    if (!items.length) return "";
    return `
      <details class="product-section">
        <summary>${title}</summary>
        <div class="product-grid">
          ${items.map(renderItem).join("")}
        </div>
      </details>
    `;
  };

  sections.innerHTML = `
    ${renderSection("Vegetables", vegetables)}
    ${renderSection("Fruits", fruits)}
  `;

  const qtyInputs = sections.querySelectorAll(".qty-input");

  function updateTotal() {
    let total = 0;
    qtyInputs.forEach((input) => {
      const price = parseFloat(input.dataset.price) || 0;
      const qty = parseFloat(input.value) || 0;
      total += price * qty;
    });
    totalDisplay.textContent = `$${total.toFixed(2)}`;
  }

  qtyInputs.forEach((input) => input.addEventListener("input", updateTotal));
  updateTotal();

  //Save to localstorage
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const order = {
      name: formData.get("name"),
      email: formData.get("email"),
      notes: formData.get("notes"),
      items: Array.from(qtyInputs)
        .filter((input) => parseFloat(input.value) > 0)
        .map((input) => ({
          name: input.name,
          pounds: parseFloat(input.value),
          pricePerlb: parseFloat(input.dataset.price),
          subtotal: parseFloat(input.dataset.price) * parseFloat(input.value),
        })),
      total: parseFloat(totalDisplay.textContent.replace("$", "")),
      timestamp: new Date().toISOString(),
    };

    // Retrieve any existing orders
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add the new order
    existingOrders.push(order);

    // Save back to localStorage
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    const successBox = document.getElementById("order-success");
    successBox.hidden = false;

    showFormModal(
      "Your order has been submitted! We will contact you soon.",
      "Order submitted"
    );

    form.reset();
    updateTotal();
  });

  //View all orders
  // ===============================================
  const viewOrdersBtn = document.getElementById("view-orders-btn");
  const ordersList = document.getElementById("orders-list");

  viewOrdersBtn.addEventListener("click", () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
      ordersList.innerHTML = "<p>No saved orders found.</p>";
      return;
    }

    ordersList.innerHTML = orders
      .map(
        (order) => `
        <div class="order-card">
        <h4>Name: ${order.name}</h4>
        <p><strong>Email:</strong> ${order.email}</p>
        <p><strong>Date:</strong> ${new Date(
          order.timestamp
        ).toLocaleString()}</p>
        <ul>
            ${order.items
              .map(
                (item) => `
            <li>${item.name} — ${item.pounds} lb @ $${
                  item.pricePerlb
                }/lb = $${item.subtotal.toFixed(2)}</li>
            `
              )
              .join("")}
        </ul>
        <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
        <hr>
        </div>
    `
      )
      .join("");
  });

  const params = new URLSearchParams(window.location.search);
  const selectedItem = params.get("item");

  if (selectedItem) {
    const match = [...sections.querySelectorAll(".product-item")].find(
      (item) => item.dataset.name === selectedItem
    );

    if (match) {
      match.classList.add("highlight-product");
      match.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = match.querySelector(".qty-input");
      if (input) input.focus();
    }
  }
}
