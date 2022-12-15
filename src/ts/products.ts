/* import { shopItemsData } from "./products-data"; */
let modal = document.getElementById("modal") as HTMLDivElement;
let shop = document.getElementById("shop") as HTMLDivElement;
let backdrop = document.getElementById("backdrop") as HTMLDivElement;
let modalContent = document.getElementById("modal-content") as HTMLDivElement;

function openModal() {
  for (let i = 0; i < shopItemsData.length; i++) {
    const modalItems = shopItemsData[i];
    let modalList = document.createElement("div") as HTMLDivElement;
    modalList.classList.add("modalBg");
    document.body.appendChild(modalList);
    modalContent.classList.add("modal-content-show");
    let modalImg = document.createElement("img");
    modalImg.classList.add("modalImg");
    modalImg.src= `${modalItems.img}`
    document.body.appendChild(modalImg);

    modalList.appendChild(modalImg)
    modal.appendChild(modalList);
  }
}

for (let i = 0; i < shopItemsData.length; i++) {
  const shopItems = shopItemsData[i];
  let shopList = document.createElement("div") as HTMLDivElement;
  shopList.classList.add("shop");
  document.body.appendChild(shopList);

  let viewBtn = document.createElement("button") as HTMLButtonElement;
  viewBtn.innerHTML = `Visa detaljer`;
  viewBtn.classList.add("viewBtn");
  document.body.appendChild(viewBtn);
  viewBtn.addEventListener("click", openModal);

  let shopImg = document.createElement("img");
  shopImg.src = `${shopItems.img}`;
  document.body.appendChild(shopImg);

  let shopName = document.createElement("h3");
  shopName.innerHTML = `${shopItems.name}`;
  document.body.appendChild(shopName);

  let shopPrice = document.createElement("h2");
  shopPrice.innerHTML = `${shopItems.price} kr`;
  document.body.appendChild(shopPrice);

  shopList.appendChild(viewBtn);
  shopList.appendChild(shopImg);
  shopList.appendChild(shopName);
  shopList.appendChild(shopPrice);
  shop.appendChild(shopList);
  /* shopList.addEventListener("click", openModal) */
}
/* 
let openModal = () => {
  modalBtn.onclick =  function name {
    
  } {
    
  }
} */
