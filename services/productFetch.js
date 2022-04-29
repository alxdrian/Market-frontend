const BASE_URL = 'https://market-backend-alxdrian.vercel.app/api';

export function getProducts() {
  const response = fetch(`${BASE_URL}/products`).then(response => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Something went wrong');
    }
  });
  return response
}

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
      throw new Error('Something went wrong');
    }
  });
  return response
}