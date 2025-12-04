export async function loadProduce() {
  try {
    const response = await fetch("assets/data/produce.json");
    const data = await response.json();
    const container = document.getElementById("produce-grid");
    if (!container) return;

    const fruits = data.produce.filter((item) => item.category === "fruit");
    const vegetables = data.produce.filter(
      (item) => item.category === "vegetable" || !item.category
    );

    const renderItem = (item) => {
      const encodedName = encodeURIComponent(item.name);
      return `
          <div class="produce-item">
            <img src="${item.image}" alt="${item.alt}" class="produce-img" />
            <h3 class="produce-name">${item.name}</h3>
            <p class="produce-description">${item.description}</p>
            <p class="produce-price">${item.price_display}</p>
            <a class="btn btn-secondary" href="order.html?item=${encodedName}">
              Order Now
            </a>
          </div>
        `;
    };

    const renderSection = (title, items) => {
      if (!items.length) return "";
      return `
        <details class="product-section">
          <summary>${title}</summary>
          <div class="produce-grid">
            ${items.map(renderItem).join("")}
          </div>
        </details>
      `;
    };

    container.innerHTML = `
      ${renderSection("Vegetables", vegetables)}
      ${renderSection("Fruits", fruits)}
    `;
  } catch (error) {
    console.error("Error loading produce data: ", error);
  }
}
