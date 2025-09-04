async function fetchProducts(category = "all") {
    try {
        const response = await fetch("https://purepetnutrition-gjecgvaxgmgtcfcc.australiaeast-01.azurewebsites.net/api/products.php");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const products = await response.json();

        const filtered = category === "all"
            ? products
            : products.filter(item => item.category === category);

        renderProducts(filtered);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function renderProducts(productArr) {
    const productList = document.getElementById("productList");
    if (!productList) {
        console.error("productList element not found");
        return;
    }

    if (productArr.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    const productHTML = productArr.map(item => `
    <article class="productCard" data-category="${item.category}">
      <img src="${item.image}" alt="${item.name} image" class="productImage" />
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <span class="price">$${parseFloat(item.price).toFixed(2)}</span>
      <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
    </article>
  `).join("");

    productList.innerHTML = productHTML;
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cartCount");
    if (cartCount) cartCount.textContent = cart.length;
}

function filterProducts() {
    const categorySelect = document.getElementById("category");
    if (!categorySelect) {
        console.error("category element not found");
        return;
    }
    const selectedCategory = categorySelect.value;
    fetchProducts(selectedCategory);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
    updateCartCount();

    const cartButton = document.getElementById("cartButton");
    if (cartButton) {
        cartButton.addEventListener("click", () => {
            window.location.href = "./Cart.html";
        });
    }
});