// Initialize cart from localStorage or as an empty array if none exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add items to the cart
function addToCart(item) {
  // Check if item is already in the cart
  const existingItem = cart.find((cartItem) => cartItem.title === item.title);

  if (existingItem) {
    // If it exists, increase the quantity
    existingItem.quantity += 1;
  } else {
    // If not, add new item with quantity of 1
    cart.push({ ...item, quantity: 1 });
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.title} has been added to your cart!`);
}

// Event listener for all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title");
    const price = parseFloat(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image");

    // Add item to cart
    addToCart({ title, price, image });
  });
});

// Function to display items in the cart on the cart page
function displayCartItems() {
  const cartContainer = document.querySelector(".cart");
  cartContainer.innerHTML = ""; // Clear existing items

  cart.forEach((item) => {
    // Create HTML structure for each cart item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("content");
    itemDiv.innerHTML = `
            <div class="img"><img src="${item.image}" alt="${item.title}"></div>
            <div class="text">
                <h1>${item.title}</h1>
                <h2>$${item.price.toFixed(2)}</h2>
                <h3>In stock</h3>
                <h4>Qty: ${item.quantity} <span class="change" data-title="${
      item.title
    }">change</span> | <span class="delete" data-title="${
      item.title
    }">delete</span></h4>
            </div>
            <div class="line"></div>
        `;
    cartContainer.appendChild(itemDiv);
  });
}

// Function to remove items from the cart
document.querySelector(".cart").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const title = event.target.getAttribute("data-title");
    cart = cart.filter((item) => item.title !== title); // Remove item from cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    displayCartItems(); // Refresh cart display
    alert(`${title} has been removed from your cart.`);
  }
});

// Call displayCartItems() on page load if on the cart page
if (window.location.pathname.includes("cart.html")) {
  displayCartItems();
}
