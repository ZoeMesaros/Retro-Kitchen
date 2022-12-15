/* import { shopItemsData } from "./products-data"; */

let shop = document.getElementById("shop") as HTMLDivElement;
let modal = document.getElementById("myModal") as HTMLDivElement;
let modalBtn = document.getElementById("myBtn") as HTMLButtonElement;
let closeModal = document.getElementsByClassName("close")[0] as HTMLSpanElement;

for (let i = 0; i < shopItemsData.length; i++) {
  const shopItems = shopItemsData[i];
  let shopList = document.createElement("div") as HTMLDivElement;
  shopList.classList.add("shop")
  document.body.appendChild(shopList)
  let shopImg = document.createElement("img")
  shopImg.src= `${shopItems.img}`
  document.body.appendChild(shopImg)
  let shopName = document.createElement("h3")
  shopName.innerHTML= `${shopItems.name}`
  document.body.appendChild(shopName)
  let shopPrice = document.createElement("h2")
  shopPrice.innerHTML = `${shopItems.price} kr`
  document.body.appendChild(shopPrice)

  shopList.appendChild(shopImg);
  shopList.appendChild(shopName);
  shopList.appendChild(shopPrice);
  shop.appendChild(shopList)
  /* shopList.addEventListener("click", openModal) */
}
/* 
let openModal = () => {
  modalBtn.onclick =  function name {
    
  } {
    
  }
} */
