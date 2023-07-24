// Ésta funcion calcula el precio de una nueva orden
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}