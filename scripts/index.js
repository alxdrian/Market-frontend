import { renderProducts } from "./render.js";
import STORE from "./store.js";

renderProducts();

const form = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value;
  STORE.changeName(name);
  console.log(STORE.name);
  renderProducts();
});