export async function getCategories() {
  const result = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((response) => response.json())
    .then((data) => data);

  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  )
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

// Para resolver o problema de Cors, caso necessário

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const targetUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
// const result = await fetch(proxyUrl + targetUrl)
//   .then((response) => response.json())
//   .then((data) => (data));
// return result;
