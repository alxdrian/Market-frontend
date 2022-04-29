import ProductCard from "../components/ProductCard.js";
import UsedFilters from "../components/UsedFilters.js";
import { getProductsByFilter } from "../services/productFetch.js";
import STORE from "./store.js";

export async function renderPage() {
  const usedFilters = document.querySelector('#used-filters');
  usedFilters.innerHTML = "";

  const productsListContainer = document.querySelector('#products-list-container');
  productsListContainer.innerHTML = '';
  
  const data = await getProductsByFilter(STORE.name, STORE.category.id);
  data.products.forEach(product => {
    const productCard = ProductCard(product);
    productsListContainer.innerHTML += productCard;
  });
  
  usedFilters.innerHTML = UsedFilters({name: STORE.name, category: STORE.category.name});
}