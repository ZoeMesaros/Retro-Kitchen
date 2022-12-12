let shop = document.getElementById("shop") as HTMLDivElement;
let modal = document.getElementById("myModal") as HTMLDivElement;

let basket = JSON.parse(localStorage.getItem("data") || "[]");

let openModal = () => {};

let loadProducts = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, img, price, colors } = x;
      let search = basket.find((y: { id: string; }) => y.id === id) || [];
           return `
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="colors">
      <img width="15" src=${colors} alt="">
        </div>
        <h3>${name}</h3>
          <h2>$ ${price} </h2>
  </div>
    `;
    })
    .join(""));
};

loadProducts ();