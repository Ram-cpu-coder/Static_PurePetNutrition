const productArr = [
    {
        "name": "Organic Chicken & Rice Dog Food",
        "category": "food",
        "description": "Premium organic chicken and rice blend for optimal dog health.",
        "image": "../public/images/product1.webp",
        "price": "$29.99"
    },
    {
        "name": "Organic Salmon Cat Food",
        "category": "food",
        "description": "Rich organic salmon formula for cats with sensitive stomachs.",
        "image": "../public/images/product2.png",
        "price": "$34.99"
    },
    {
        "name": "Omega-3 Fish Oil Supplement",
        "category": "supplements",
        "description": "Supports coat, joints, and heart health with natural omega-3s.",
        "image": "../public/images/product3.png",
        "price": "$19.99"
    },
    {
        "name": "Probiotic Digestive Support",
        "category": "supplements",
        "description": "Enhances digestion and immune system for all pets.",
        "image": "../public/images/product4.png",
        "price": "$24.99"
    }
];

function renderProducts(category = "all") {
    const productList = document.getElementById("productList");
    if (!productList) return; // Exit if container not found (e.g., on other pages)

    const filteredProducts = category === "all" ? productArr : productArr.filter(product => product.category === category);

    const productHTML = filteredProducts.map((item) => {
        return `<a href="#" aria-label="View details for ${item.name}">
            <article class="productCard" data-category="${item.category}">
                <img src="${item.image}" alt="${item.name} image" class="productImage" />
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </article>
        </a>`;
    }).join("");

    productList.innerHTML = productHTML;
}

function filterProducts() {
    const categorySelect = document.getElementById("category");
    const selectedCategory = categorySelect.value;
    renderProducts(selectedCategory);
}

// Initialize product rendering on page load
document.addEventListener("DOMContentLoaded", () => renderProducts());