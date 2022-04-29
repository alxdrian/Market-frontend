import { renderPage } from "./render.js";
import STORE from "./store.js";

renderPage();

// Agrega un listener para la búsqueda por nombre, luego renderiza los cambios de la vista

const form = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  STORE.changeName(name);
  renderPage();
});

// Agrega un listener para la búsqueda por categoría, luego renderiza los cambios de la vista

const categories = document.querySelectorAll('.navbar-item-category');
categories.forEach(category => {
  category.addEventListener('click', (e) => {
    const categoryId = e.target.dataset.category;
    const categoryName = e.target.innerText;
    STORE.changeCategory({
      id: categoryId,
      name: categoryName
    });
    renderPage();
  });
});

// Agrega un listener para el filtro por precio y descuentos, luego renderiza los cambios de la vista

const numericFilters = document.querySelector('#numeric-filters');
numericFilters.addEventListener('submit', (e) => {
  e.preventDefault();
  const minprice = e.target.elements.minprice.value;
  const maxprice = e.target.elements.maxprice.value;
  const mindiscount = e.target.elements.mindiscount.value;
  const maxdiscount = e.target.elements.maxdiscount.value;
  STORE.changeMinPrice(minprice);
  STORE.changeMaxPrice(maxprice);
  STORE.changeMinDiscount(mindiscount);
  STORE.changeMaxDiscount(maxdiscount);
  renderPage();
});