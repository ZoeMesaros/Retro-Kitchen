/*import { CartItem } from "./products";
import { shopItemsData } from "./products-data";

let checkoutContainer: HTMLDivElement = document.getElementById("checkout-container") as HTMLDivElement

function createHtmlForCheckout() {
    checkoutContainer.innerHTML = "";
  
    let cartFromLS: string = localStorage.getItem("CartList") || "[]";
    let productCartList: CartItem{} = JSON.parse(cartFromLS);
  
    for (let i = 0; productCartList.length; i++) {
      let productImg: HTMLImageElement = document.createElement("img");
      let productTitle: HTMLHeadElement = document.createElement("h1");
      let productPrice: HTMLParagraphElement = document.createElement("p");
      let minusButton: HTMLButtonElement = document.createElement("button");
      let plusButton: HTMLButtonElement = document.createElement("button");
      let totalAmount: HTMLParagraphElement = document.createElement("p");
  
        productImg.src = productCartList[i].product
        productTitle.innerHTML = productCartList[i].product.
  
    }
  }*/