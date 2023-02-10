let shop = document.getElementById("shop") as HTMLDivElement;
let cartIcon = document.getElementById("output") as HTMLDivElement;
let cartlist: any[] = JSON.parse(localStorage.getItem("CartList") as string);
cartIcon.innerHTML = cartlist.length.toString();
class CartItem {
  product: {};
  amount: number;

  constructor(product: {}, amount: number) {
    this.product = product;
    this.amount = amount;
  }
}

function openModal(id: string) {
  for (let i = 0; i < shopItemsData.length; i++) {
    const modalItems = shopItemsData[i];
    if (modalItems.id !== id) {
      continue;
    }
    let modalList = document.createElement("div") as HTMLDivElement;
    modalList.classList.add("modalBg");
    document.body.appendChild(modalList);

    modalList.style.display = "block";

    function ModalCloseFunction() {
      modalList.style.display = "none";
    }

    modalList.innerHTML = `
  <h1 class="header">${modalItems.name}</h1>
  <img class="modalImg" src ="${modalItems.img}">
  <section class="descContainer">${modalItems.desc}</section>

  `;

    let closeModal = document.createElement("span") as HTMLSpanElement;
    closeModal.classList.add("close"[0]);
    closeModal.innerHTML = `&times`;
    document.body.appendChild(closeModal);
    closeModal.addEventListener("click", ModalCloseFunction);

    let addButton = document.createElement("button") as HTMLButtonElement;
    addButton.classList.add("addToCart");
    addButton.innerHTML = `Lägg till i varukorgen`;
    document.body.appendChild(addButton);

    modalList.appendChild(addButton);
    modalList.appendChild(closeModal);
    shop.appendChild(modalList);

    //Lägg till produkt
    let cartItems = new CartItem(modalItems, 1);

    addButton.addEventListener("click", () => {
      let found = false;
      let foundItemIndex = 0;
      for (let i = 0; i < cartlist.length; i++) {
        const element = cartlist[i];
        if (element.product.id === modalItems.id) {
          found = true;
          foundItemIndex = i;
          break;
        }
      }
      if (found) {
        if (cartlist[foundItemIndex].amount < 3) {
          cartlist[foundItemIndex].amount += 1;
        }
      } else {
        cartlist.push(cartItems);
      }

      cartIcon.innerHTML = cartlist.length.toString();

      localStorage.setItem("CartList", JSON.stringify(cartlist));
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
  shopList.innerHTML = `
  <img class ="productImg" src ="${shopItems.img}">
  <section class ="colorChoice"></section>
  <h3>${shopItems.name}</h3>
  <h2>${shopItems.price} SEK</h2>
  `;
  shop.append(shopList);
}
