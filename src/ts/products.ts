/* import { shopItemsData } from "./products-data"; */

let shop = document.getElementById("shop") as HTMLDivElement;

function openModal(id: string) {
  for (let i = 0; i < shopItemsData.length; i++) {
    const modalItems = shopItemsData[i];
    let modalList = document.createElement("div") as HTMLDivElement;
    modalList.classList.add("modalBg");
    document.body.appendChild(modalList);

    let header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = `${modalItems.name}`;
    document.body.appendChild(header);

    let descContainer = document.createElement("div") as HTMLDivElement;
    descContainer.classList.add("descContainer");
    descContainer.innerHTML = `${modalItems.desc}`;
    document.body.appendChild(descContainer);

    let modalImg = document.createElement("img") as HTMLImageElement;
    modalImg.classList.add("modalImg");
    modalImg.src = `${modalItems.img}`;

    modalList.appendChild(modalImg);
    modalList.appendChild(descContainer);
    modalList.appendChild(header);
    shop.appendChild(modalList);
  }
}

for (let i = 0; i < shopItemsData.length; i++) {
  const shopItems = shopItemsData[i];
  let shopList = document.createElement("div") as HTMLDivElement;
  shopList.classList.add("product-card");
  shopList.addEventListener("click", () => {
    openModal(shopItems.id);
  });
  document.body.appendChild(shopList);

  let shopImg = document.createElement("img") as HTMLImageElement;
  shopImg.classList.add("productImg"); //Stylning av bilderna
  shopImg.src = `${shopItems.img}`;
  document.body.appendChild(shopImg);

  let colors = document.createElement("img") as HTMLImageElement;
  colors.classList.add("colors");
  colors.src = `${shopItems.colors}`;
  document.body.appendChild(colors);

  /*   let imgChoice = document.createElement("div") as HTMLDivElement;
  imgChoice.classList.add("colorChoice"); //Stylning av bilderna
  document.body.appendChild(imgChoice); */

  let shopName = document.createElement("h3");
  shopName.innerHTML = `${shopItems.name}`;
  document.body.appendChild(shopName);

  let shopPrice = document.createElement("h2");
  shopPrice.innerHTML = `${shopItems.price} kr`;
  document.body.appendChild(shopPrice);

  shopList.appendChild(shopImg);
  shopList.appendChild(colors);
  /*   imgChoice.appendChild(colors);
  shopList.appendChild(imgChoice); */
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
