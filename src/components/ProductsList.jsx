export const productsList = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Mouse", price: 25, category: "Electronics" },
  { id: 3, name: "Book", price: 20, category: "Books" },
  { id: 4, name: "Keyboard", price: 75, category: "Electronics" },
  { id: 5, name: "T-Shirt", price: 30, category: "Apparel" },
];

export function searchProductsQuery(query) {
  if (!query) {
    return productsList;
  }

  const { name, category } = query;
  let filteredProducts = productsList;

  if (name) {
    const lowerCaseNameQuery = String(name).toLowerCase();
    filteredProducts = filteredProducts.filter((product) =>
      String(product.name).toLowerCase().startsWith(lowerCaseNameQuery)
    );
  }

  if (category) {
    const lowerCaseCategoryQuery = String(category).toLowerCase();
    filteredProducts = filteredProducts.filter((product) =>
      String(product.category).toLowerCase().includes(lowerCaseCategoryQuery)
    );
  }
  return filteredProducts;
}
