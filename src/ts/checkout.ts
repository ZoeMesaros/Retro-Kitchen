const checkoutCart = JSON.parse(localStorage.getItem('CartList') as string);
let checkoutContainer = document.getElementById('checkout-container') as HTMLDivElement;


for (let i = 0; i < checkoutCart.length; i++) {
  const shopItems = checkoutCart[i];
  let shopList = document.createElement("div") as HTMLDivElement;
  shopList.classList.add("product-card");
  document.body.appendChild(shopList);

  let shopImg = document.createElement("img") as HTMLImageElement;
  shopImg.classList.add("productImg");
  shopImg.src = `${shopItems.img}`;
  document.body.appendChild(shopImg);

  let imgChoice = document.createElement("div") as HTMLDivElement;
  imgChoice.classList.add("colorChoice");
  document.body.appendChild(imgChoice);

  for (let i = 0; i < shopItems.colors.length; i++) {
    const element = shopItems.colors[i];
    let colors = document.createElement("img") as HTMLImageElement;
    colors.classList.add("colors");
    colors.src = `${element}`;
    imgChoice.appendChild(colors);
  }

  let shopName = document.createElement("h3");
  shopName.innerHTML = `${shopItems.name}`;
  document.body.appendChild(shopName);

  let shopPrice = document.createElement("h2");
  shopPrice.innerHTML = `${shopItems.price} kr`;
  document.body.appendChild(shopPrice);

  shopList.appendChild(shopImg);
  shopList.appendChild(imgChoice);
  shopList.appendChild(shopName);
  shopList.appendChild(shopPrice);
  checkoutContainer.appendChild(shopList);
}

/* import { CartItem } from "./products";
import { checkoutCart } from "./products-data";

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
  } */

  let myForm = document.getElementById("myForm") as HTMLFormElement;
  myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let h1 = document.getElementById("hiddenMessage") as HTMLElement
    h1.style.display = "block";
    let formDiv = document.getElementById("formDiv") as HTMLDivElement
    formDiv.style.display = "none";
    setTimeout(function() {
      myForm.e.submit()
    }, 2000)
  }) 


