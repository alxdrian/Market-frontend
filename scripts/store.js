const STORE = {
  name: "",
  category: 0,
  products: [],
  changeName,
  changeCategory,
};

function changeName(name) {
  this.name = name;
}

function changeCategory(category) {
  this.category = category;
}

export default STORE;