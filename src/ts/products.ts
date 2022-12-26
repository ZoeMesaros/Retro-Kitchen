/* import { shopItemsData } from "./products-data"; */

let shop = document.getElementById("shop") as HTMLDivElement;
let cartIcon = document.getElementById("output") as HTMLDivElement;
let cartlist:any[] = [];




function openModal(id: string) {
  for (let i = 0; i < shopItemsData.length; i++) {
    const modalItems = shopItemsData[i];
    if (modalItems.id !== id) {
      continue
    }
    let modalList = document.createElement("div") as HTMLDivElement;
    modalList.classList.add("modalBg");
    document.body.appendChild(modalList);

    modalList.style.display = "block";

    function ModalCloseFunction () {
      modalList.style.display = "none";
    }

    let closeModal = document.createElement("span") as HTMLSpanElement;
    closeModal.classList.add("close"[0]);
    closeModal.innerHTML= `&times`
    document.body.appendChild(closeModal);
    closeModal.addEventListener("click", ModalCloseFunction)

    let header = document.createElement("h1");
    header.classList.add("header");
    header.innerHTML = `${modalItems.name}`;
    document.body.appendChild(header);

  /*   let colorForm = document.createElement("option") as HTMLOptionElement;
    colorForm.classList.add("colorForm");
    colorForm.innerHTML = `${modalItems.name}`;
    document.body.appendChild(colorForm); */

    let addButton = document.createElement("button") as HTMLButtonElement;
    addButton.classList.add("addToCart");
    addButton.innerHTML = `Lägg till i varukorgen`;
    document.body.appendChild(addButton);


    let descContainer = document.createElement("div") as HTMLDivElement;
    descContainer.classList.add("descContainer");
    descContainer.innerHTML = `${modalItems.desc}`;
    document.body.appendChild(descContainer);

    let modalImg = document.createElement("img") as HTMLImageElement;
    modalImg.classList.add("modalImg");
    modalImg.src = `${modalItems.img}`;

/*     modalList.appendChild(colorForm); */
    modalList.appendChild(modalImg);
    modalList.appendChild(descContainer);
    modalList.appendChild(addButton)
    modalList.appendChild(header);
    modalList.appendChild(closeModal);
    shop.appendChild(modalList);

    //Lägg till produkt
    addButton.addEventListener("click", () => {
      console.log(modalItems)
      cartlist.push(modalItems);
      modalItems.id = modalItems.id + '-' + Math.random();
      
      cartIcon.innerHTML = JSON.parse(localStorage.getItem('CartList') as string).length + 1;
      localStorage.setItem("CartList", JSON.stringify(cartlist))
    });
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
  shop.appendChild(shopList);
}
