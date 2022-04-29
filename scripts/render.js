import ProductCard from "../components/ProductCard.js";
import UsedFilters from "../components/UsedFilters.js";
import { getProductsByFilter } from "../services/productFetch.js";
import STORE from "./store.js";

export async function renderPage() {
  // Elimina el mensaje previo de detalles de filtro usado
  const usedFilters = document.querySelector('#used-filters');
  usedFilters.innerHTML = "";
  
  // Añade un loading mientras cargan los productos
  const productsListContainer = document.querySelector('#products-list-container');
  productsListContainer.innerHTML = `
    <div class="loader"></div>
  `;

  // Elimina la clase que indica la categoria seleccionada previamente
  const prevSelectedTab = document.querySelector('.navbar-item-category.selected');
  if (prevSelectedTab) {
    prevSelectedTab.classList.remove('selected');
  }

  // Agrega la clase que indica la categoria seleccionada actualmente
  const newSelectedTab = document.querySelector(`[data-category="${STORE.category.id}"]`);
  newSelectedTab.classList.add('selected');

   // Obtiene los productos de la API y los muestra en la página
  const data = await getProductsByFilter(STORE.name, STORE.category.id);
  if (data.products.length > 0) {
    productsListContainer.innerHTML = "";
    data.products.forEach(product => {
      productsListContainer.innerHTML += ProductCard(product);
    });
  } else {
    productsListContainer.innerHTML = `
      <div class="no-results">
        <p>No se encontraron resultados</p>
      </div>
    `;
  }
  
  // Actualiza el mensaje previo de detalles de filtro usado
  usedFilters.innerHTML = UsedFilters({name: STORE.name, category: STORE.category.name});
}