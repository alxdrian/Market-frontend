const BASE_URL = 'https://market-backend-alxdrian.vercel.app/api';

function getProducts() {
  const response = fetch(`${BASE_URL}/products`).then(res => res.json());
  return response;
}

async function renderProducts() {
  const productsListContainer = document.querySelector('.products-list-container');
  productsListContainer.innerHTML = '';
  const data = await getProducts();
  data.products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <img src="${product.url_image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    productsListContainer.appendChild(productItem);
  });
}

renderProducts();