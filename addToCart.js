import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartvalue } from "./updateCartvalue";

getCartProductFromLS();
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);

  // console.log(currentProdElem);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;

  let price = currentProdElem.querySelector(".productPrice").innerText;

  // console.log(quantity, price);

  price = price.replace("₹", "");

  let extistingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (extistingProd && quantity > 1) {
    quantity = Number(extistingProd.quantity) + Number(quantity);
    price = Number(quantity * price);

    let upadateCart = { id, quantity, price };
    upadateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? upadateCart : curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(upadateCart));
    //show toast when product add or remove in cart
    showToast("add", id);
  }

  if (extistingProd) {
    //alert("duplicate hai bhai");
    return false;
  }

  price = Number(quantity * price);
  quantity = Number(quantity);
  // console.log(price);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  // update cart button
  updateCartvalue(arrLocalStorageProduct);

  //show toast when product add or remove in cart
  showToast("add", id);
};
