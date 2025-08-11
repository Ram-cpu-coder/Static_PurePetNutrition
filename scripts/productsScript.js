
// products page 
const productsArr = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "description": "High-quality Bluetooth headphones with noise cancellation.",
        "price": 99.99,
        "image": "https://via.placeholder.com/200x200.png?text=Headphones",
        "category": "Electronics",
        "stock": 15
    },
    {
        "id": 2,
        "name": "Gaming Mouse",
        "description": "Ergonomic gaming mouse with customizable RGB lighting.",
        "price": 49.99,
        "image": "https://via.placeholder.com/200x200.png?text=Gaming+Mouse",
        "category": "Electronics",
        "stock": 30
    },
    {
        "id": 3,
        "name": "Smartwatch",
        "description": "Fitness tracking smartwatch with heart rate monitor.",
        "price": 149.99,
        "image": "https://via.placeholder.com/200x200.png?text=Smartwatch",
        "category": "Wearables",
        "stock": 20
    },
    {
        "id": 4,
        "name": "Sneakers",
        "description": "Comfortable running sneakers for daily wear.",
        "price": 79.99,
        "image": "https://via.placeholder.com/200x200.png?text=Sneakers",
        "category": "Footwear",
        "stock": 25
    },
    {
        "id": 5,
        "name": "Backpack",
        "description": "Durable waterproof backpack with laptop compartment.",
        "price": 59.99,
        "image": "https://via.placeholder.com/200x200.png?text=Backpack",
        "category": "Accessories",
        "stock": 40
    }
];

const productList = document.getElementById("productList");
const productHTML = productsArr.map((item) => {
    return `<a href ="https://dev.to/">
    <article class="blogCard">
        <h2>${item.name}</h2>
        <span class="badge">${item.category}</span>
        <p>
            ${item.description}
        </p>
    </article>
    </a>`
}).join("")

productList.innerHTML = productHTML;