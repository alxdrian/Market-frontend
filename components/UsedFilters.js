function UsedFilters(filters) {
  const name = filters.name;
  const category = filters.category;
  let message = "Mostrando "
  if (name !== "") {
    message += ` resultados de <b>${name}</b> en categoría <b>${category}</b>`;
  } else {
    message += ` resultados de categoría <b>${category}</b>`;
  }
  return `
    <p>
      ${message}
    </p>
  `;
}

export default UsedFilters;