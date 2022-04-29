import ProductCard from "../components/ProductCard.js";
import { getProducts } from "../services/productFetch.js";

async function renderProducts() {
  const productsListContainer = document.querySelector('.products-list-container');
  productsListContainer.innerHTML = '';
  const data = await getProducts();
  data.products.forEach(product => {
    const productCard = ProductCard(product);
    productsListContainer.innerHTML += productCard;
  });
}

renderProducts();