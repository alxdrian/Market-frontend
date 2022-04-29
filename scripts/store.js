// El Store sirve para almacenar los filtros que seran usados en la busqueda de productos

const STORE = {
  name: "",
  category: {
    id: "0",
    name: "Todas"
  },
  minprice: "",
  maxprice: "",
  mindiscount: "",
  maxdiscount: "",
  changeName,
  changeCategory,
  changeMinPrice,
  changeMaxPrice,
  changeMinDiscount,
  changeMaxDiscount
};

function changeName(name) {
  this.name = name;
}

function changeCategory(category) {
  this.category = category;
}

function changeMinPrice(minprice) {
  this.minprice = minprice;
}

function changeMaxPrice(maxprice) {
  this.maxprice = maxprice;
}

function changeMinDiscount(mindiscount) {
  this.mindiscount = mindiscount;
}

function changeMaxDiscount(maxdiscount) {
  this.maxdiscount = maxdiscount;
}

export default STORE;