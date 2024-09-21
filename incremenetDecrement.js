import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incremenetDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(".productQuantity");

  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  //get the data from localStorage
  let localCartProducts = getCartProductFromLS();

  let extistingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (extistingProd) {
    quantity = extistingProd.quantity;
    localStoragePrice = extistingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = stock * price;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  // finally we need to update our acutual local storge price

  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(3));

  let upadateCart = { id, quantity, price: localStoragePrice };
  upadateCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? upadateCart : curProd;
  });

  localStorage.setItem("cartProductLS", JSON.stringify(upadateCart));

  productQuantity.textContent = quantity;
  productPrice.textContent = localStoragePrice;

  updateCartProductTotal();
};
