import ProductCard from "../components/ProductCard.js";
import { getProductsByFilter } from "../services/productFetch.js";
import STORE from "./store.js";

export async function renderProducts() {
  const productsListContainer = document.querySelector('.products-list-container');
  productsListContainer.innerHTML = '';
  const data = await getProductsByFilter(STORE.name, STORE.category);
  console.log(data);
  data.products.forEach(product => {
    const productCard = ProductCard(product);
    productsListContainer.innerHTML += productCard;
  });
}