const checkoutCart = JSON.parse(localStorage.getItem("CartList") as string);
let checkoutContainer = document.getElementById("checkout-container") as HTMLDivElement;
let totAmount = document.getElementById("total") as HTMLSpanElement;

const amountArray = ["0","1","2","3"];

let totalAmount = 0;

// loop and multiply with amount
for(var q of checkoutCart){
    var multiplyWithAmount = q.amount * q.product.price
    totalAmount += multiplyWithAmount;           
    }
    totAmount.textContent = totalAmount.toString();

for (let i = 0; i < checkoutCart.length; i++) {
  const shopItems = checkoutCart[i];
  let shopList = document.createElement("div") as HTMLDivElement;
  shopList.classList.add("product-card");
  checkoutContainer.appendChild(shopList);

  let shopImg = document.createElement("img") as HTMLImageElement;
  shopImg.classList.add("productImg");
  shopImg.src = `${shopItems.product.img}`;
  shopList.appendChild(shopImg);

  let shopName = document.createElement("h3");
  shopName.innerHTML = `${shopItems.product.name}`;
  shopName.classList.add("productName")
  shopList.appendChild(shopName);

  let amountName = document.createElement('p');
  amountName.classList.add('amount');
  amountName.innerHTML = `Antal`;
 shopList.appendChild(amountName);

  let productPrice = document.createElement("h3");
  productPrice.classList.add('price');
  productPrice.innerHTML = `${shopItems.product.price * shopItems.amount} SEK`;
  shopList.appendChild(productPrice);

  let selectAmount = document.createElement("select") as HTMLSelectElement;
  selectAmount.classList.add('choice');
  shopList.appendChild(selectAmount);
  
  for (var x = 0; x < amountArray.length; x++) {
    var option = document.createElement("option") as HTMLOptionElement;
    option.value = amountArray[x];
    option.text = amountArray[x];
    selectAmount.appendChild(option);
}

selectAmount.selectedIndex = shopItems.amount;

// Update product
selectAmount.addEventListener("change", () => {
    if(selectAmount.selectedIndex == 0) {
        const ingredientIndex = checkoutCart.findIndex((item: any) => item.id === shopItems.product.id);
        checkoutCart.splice(ingredientIndex, 1);
        
        cartIconValue.innerHTML = checkoutCart.length;

        shopList.remove()

        localStorage.setItem("CartList", JSON.stringify(checkoutCart));
    }

    shopItems.amount = selectAmount.selectedIndex;
    let totalAmount = 0;

    productPrice.innerHTML = `${shopItems.amount * shopItems.product.product.price} SEK`;
    // loop and multiply with amount
    for(var i of checkoutCart){
        var multiplyWithAmount = i.amount * i.product.price
        totalAmount += multiplyWithAmount;           
        }

        totAmount.textContent = totalAmount.toString();

    localStorage.setItem("CartList", JSON.stringify(checkoutCart));

})

  let removeItemButton = document.createElement("button") as HTMLButtonElement;
  removeItemButton.classList.add("remove");
  removeItemButton.innerHTML = `Radera`;

  removeItemButton.addEventListener("click", () => {
      
      const ingredientIndex = checkoutCart.findIndex((item: any) => item.id === shopItems.product.id);
      checkoutCart.splice(ingredientIndex, 1);
      
      cartIconValue.innerHTML = checkoutCart.length;

      shopList.remove()

      let totalAmount = 0;
      
      for(var i of checkoutCart){
        var multiplyWithAmount = i.amount * i.product.price
        totalAmount += multiplyWithAmount;
        
        }
    while( totAmount.firstChild ) {
        totAmount.removeChild( totAmount.firstChild );
    }
    
    totAmount.appendChild( document.createTextNode(totalAmount.toString()) );

    localStorage.setItem("CartList", JSON.stringify(checkoutCart));
  
})
shopList.appendChild(removeItemButton);
}

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