import ProductCard from "../components/ProductCard.js";
import UsedFilters from "../components/UsedFilters.js";
import { getProductsByFilter } from "../services/productFetch.js";
import STORE from "./store.js";

export async function renderPage() {
  // Elimina el mensaje previo de detalles de filtro usado
  const usedFilters = document.querySelector('#used-filters');
  usedFilters.innerHTML = "";

  const selectedTab = document.querySelector('.navbar-item-category.selected');
  if (selectedTab) {
    selectedTab.classList.remove('selected');
  }
  const newSelectedTab = document.querySelector(`[data-category="${STORE.category.id}"]`);
  newSelectedTab.classList.add('selected');

   // Obtiene los productos de la API y los muestra en la página
  const productsListContainer = document.querySelector('#products-list-container');
  productsListContainer.innerHTML = '';
  const data = await getProductsByFilter(STORE.name, STORE.category.id);
  data.products.forEach(product => {
    const productCard = ProductCard(product);
    productsListContainer.innerHTML += productCard;
  });
  
  // Actualiza el mensaje previo de detalles de filtro usado
  usedFilters.innerHTML = UsedFilters({name: STORE.name, category: STORE.category.name});
}