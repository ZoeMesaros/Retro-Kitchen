const storedProducts = JSON.parse(localStorage.getItem('CartList') as string);

let cartIconValue = document.getElementById("output") as HTMLDivElement;
let shoppingCart = document.getElementById("shopping-cart") as HTMLDivElement;


for (let index = 0; index < storedProducts.length; index++) {
    const product = storedProducts[index];
    let cartItem = document.createElement("div") as HTMLDivElement;
    cartItem.classList.add("product-card");
    shoppingCart.appendChild(cartItem);

    let itemImg = document.createElement("img") as HTMLImageElement;
    itemImg.classList.add("itemImg");
    itemImg.src = `${product.img}`;
    cartItem.appendChild(itemImg);

    let productName = document.createElement("h3");
    productName.innerHTML = `${product.name}`;
    cartItem.appendChild(productName);

    let productPrice = document.createElement("h3");
    productPrice.innerHTML = `${product.price}`;
    cartItem.appendChild(productPrice);

    let removeItemButton = document.createElement("button") as HTMLButtonElement;
    removeItemButton.classList.add("remove");
    removeItemButton.innerHTML = `ta bort`;
    removeItemButton.addEventListener("click", () => {
        console.log(storedProducts);
        
       
        console.log(storedProducts);
        const ingredientIndex = storedProducts.findIndex((item: any) => item.id === product.id);
        storedProducts.splice(ingredientIndex, 1);
        
        localStorage.setItem("CartList", JSON.stringify(storedProducts));

        cartIconValue.innerHTML = storedProducts.length;

        cartItem.remove()


        
    })
    cartItem.appendChild(removeItemButton);
}

/* let checkoutButton = document.createElement("button") as HTMLButtonElement;
checkoutButton.classList.add("checkout");
checkoutButton.innerHTML = `Gå till kassan`;
checkoutButton.addEventListener('click', goToCheckout)
document.body.appendChild(checkoutButton);
shoppingCart.appendChild(checkoutButton)

function goToCheckout () {
    location.href = "checkout.html"
} */