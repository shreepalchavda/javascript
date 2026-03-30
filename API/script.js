async function getProducts() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();

  let container = document.getElementById("products");

  data.forEach(product => {
    let card = `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.title.slice(0, 40)}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

getProducts();