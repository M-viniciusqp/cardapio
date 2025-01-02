const form = document.getElementById('product-form');
const productList = document.getElementById('product-list');

// Carrega os produtos do localStorage
function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  productList.innerHTML = '';
  products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Preço: R$${product.price}</p>
      <button onclick="deleteProduct(${index})">Excluir</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Adiciona produto
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  const newProduct = { name, price, image };
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));

  form.reset();
  loadProducts();
});

// Exclui produto
function deleteProduct(index) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  loadProducts();
}

loadProducts();
