/* let shop = document.getElementById("shop") as HTMLInputElement;
let basket = JSON.parse(localStorage.getItem("products-data")) || [] as HTMLInputElement;
  
let generateShop = () => {
    return (shop.innerHTML = storeItems
      .map((x) => {
        let { id, name, desc, img, price } = x;
        let search = products-data.find((y) => y.id === id) || [];
        return `
      <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
    </div>
      `;
      })
      .join(""));
  };
  
  generateShop(); */