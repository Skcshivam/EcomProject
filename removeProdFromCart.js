import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartvalue } from "./updateCartvalue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // update the localStrogage from remove the item

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  // to remove the div on click
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    //show toast when product add or remove in cart
    showToast("delete", id);

    
  }

  updateCartvalue(cartProducts);
};
