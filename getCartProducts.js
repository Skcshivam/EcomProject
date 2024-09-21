import { updateCartvalue } from "./updateCartvalue";

export const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);

  // update cart button
  updateCartvalue(cartProducts);
  return cartProducts;
};
