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