function ProductCard(product) {
  let imageProduct = '';
  if (product.url_image) {
    imageProduct = product.url_image;
  } else {
    imageProduct = "./assets/images/NoImageAvailable.png"; 
  }
  let renderPrice = '';
  if (product.discount) {
    let finalPrice = (product.price - (product.discount * product.price / 100)).toFixed(2)/100;
    renderPrice = `
      <div class="product-price">
        <p class="old-price">S/. ${product.price.toFixed(2)/100}</p>
        <p class="price">S/. ${finalPrice}</p>
      </div>
      <div>
        <p class="discount">- ${product.discount}%</p>
      </div>
    `
  } else {
    renderPrice = `
      <div class="product-price">
        <p class="price">S/. ${product.price.toFixed(2)/100}</p>
      </div>
    `
  }
  return `
    <div class="product-item">
      <div class="product-image">
        <img src="${imageProduct}" alt="${product.name}">
      </div>
      <h4>${product.name}</h4>
      ${renderPrice}
    </div>
  `;
}

export default ProductCard;