const productDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");

let cart = [];

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => displayProducts(data))
  .catch(err => console.log(err));


function displayProducts(products) {
  productDiv.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");

    div.className = "bg-white p-4 rounded shadow";

    div.innerHTML = `
      <img src="${product.image}" class="h-32 mx-auto mb-2 object-contain"/>
      
      <p class="text-sm font-medium mb-1">${product.title}</p>
      
      <p class="text-green-600 font-bold mb-2">
        ₹ ${Math.round(product.price * 80)}
      </p>

      <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 w-full">
        Add to Cart
      </button>
    `;

    const button = div.querySelector("button");
    button.addEventListener("click", () => {
      addToCart({
        name: product.title,
        price: Math.round(product.price * 80)
      });
    });

    productDiv.appendChild(div);
  });
}

function addToCart(product) {
  cart.push(product);
  displayCart();
}

function displayCart() {
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p class='text-gray-500'>Cart is empty</p>";
    return;
  }

  cart.forEach(item => {
    const div = document.createElement("div");

    div.className = "flex justify-between border-b py-2 text-sm";

  
    div.innerHTML = `
      <span>${item.name}</span>
      <span class="text-green-600 font-medium">₹ ${item.price}</span>
    `;

    cartDiv.appendChild(div);
  });
}