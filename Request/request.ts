export const getAllCategory = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  return response.json();
};

export const getAllProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

export const getSingleProduct = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
};

export const getProductByCategory = async (category: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response.json();
};
