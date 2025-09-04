function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.getElementById("cartTableBody");
    const cartTotal = document.getElementById("cartTotal");

    if (cart.length === 0) {
        cartTableBody.innerHTML = `<tr><td colspan="4">Your cart is empty.</td></tr>`;
        cartTotal.textContent = "0.00";
        return;
    }

    let total = 0;
    cartTableBody.innerHTML = cart.map((item, index) => {
        total += parseFloat(item.price);
        return `
      <tr>
        <td><img src="${item.image}" alt="${item.name}" /> ${item.name}</td>
        <td>${item.description}</td>
        <td>$${parseFloat(item.price).toFixed(2)}</td>
        <td><button onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
    }).join("");

    cartTotal.textContent = total.toFixed(2);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

document.getElementById("purchaseBtn").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Purchase successful! Thank you for shopping with PurePet Nutrition.");
    localStorage.removeItem("cart");
    loadCart();
});

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    document.getElementById("year").textContent = new Date().getFullYear();
});