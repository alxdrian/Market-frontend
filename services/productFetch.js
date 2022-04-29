const BASE_URL = 'https://market-backend-alxdrian.vercel.app/api';

// Obtener productos de la api por filtros según nombre, categoría, precio mínimo, precio máximo, descuento mínimo y descuento máximo

export function getProductsByFilter(
  name, 
  category,
  minprice,
  maxprice,
  mindiscount,
  maxdiscount
) {
  const url = `${BASE_URL}/products/search?`;
  const params = [];
  if (name !== "") {
    params.push(`name=${name}`);
  }
  if (category !== "0") {
    params.push(`category=${category}`);
  }
  if (minprice !== "") {
    params.push(`pricemin=${minprice*100}`);
  }
  if (maxprice !== "") {
    params.push(`pricemax=${maxprice*100}`);
  }
  if (mindiscount !== "") {
    params.push(`discountmin=${mindiscount}`);
  }
  if (maxdiscount !== "") {
    params.push(`discountmax=${maxdiscount}`);
  }
  const response = fetch(`${url}${params.join('&')}`).then(response => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Hubo un error');
    }
  });
  return response
}