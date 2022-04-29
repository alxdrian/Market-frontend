import { renderProducts } from "./render.js";
import STORE from "./store.js";

renderProducts();

const form = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  STORE.changeName(name);
  renderProducts();
});

const categories = document.querySelectorAll('.navbar-item-category');
categories.forEach(category => {
  category.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    const categoryId = e.target.dataset.category;
    const categoryName = e.target.innerText;
    STORE.changeCategory({
      id: categoryId,
      name: categoryName
    });
    renderProducts();

  });
});

