export const BASE_URL = 'http://market-backend-alxdrian.vercel.app/api';

export function getProducts() {
  const response = fetch(`${BASE_URL}/products`).then(res => res.json());
  return response;
}