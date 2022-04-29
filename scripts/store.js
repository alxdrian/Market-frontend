const STORE = {
  name: "",
  category: {
    id: "0",
    name: "Todas"
  },
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