function ProductCard(product) {
  let imageProduct = '';
  if (product.url_image) {
    imageProduct = product.url_image;
  } else {
    imageProduct = "./assets/images/NoImageAvailable.png"; 
  }
  return `
    <div class="product-item">
      <img src="${imageProduct}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <p>${product.discount}</p>
    </div>
  `;
}

export default ProductCard;