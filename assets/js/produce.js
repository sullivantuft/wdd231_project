export async function loadProduce() {
  try {
    const response = await fetch("assets/data/produce.json");
    const data = await response.json();
    const grid = document.getElementById("produce-grid");
    if (!grid) return;

    grid.innerHTML = data.produce
      .map((item) => {
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
      })
      .join("");
  } catch (error) {
    console.error("Error loading produce data: ", error);
  }
}
