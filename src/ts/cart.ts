const storedProducts = JSON.parse(localStorage.getItem('CartList') as string);

let cartIconValue = document.getElementById("output") as HTMLDivElement;
let shoppingCart = document.getElementById("shopping-cart") as HTMLDivElement;
let totalSum = document.getElementById("total") as HTMLSpanElement;

// Numbers in select option
const numbers = ["0","1","2","3"];

// Total sum updates directly
let sum = 0;
for(var index of storedProducts){
    var multiplyWithAmount = index.amount * index.product.price
    sum += multiplyWithAmount;           
    }

    // Updates and removes previus sum
    while( totalSum.firstChild ) {
    totalSum.removeChild( totalSum.firstChild );
}
totalSum.innerHTML = sum.toString();


for (let index = 0; index < storedProducts.length; index++) {
    const product = storedProducts[index];
    let cartItem = document.createElement("div") as HTMLDivElement;
    cartItem.classList.add("product-card");
    shoppingCart.appendChild(cartItem);

    let itemImg = document.createElement("img") as HTMLImageElement;
    itemImg.classList.add("itemImg");
    itemImg.src = `${product.product.img}`;
    cartItem.appendChild(itemImg);

    let productName = document.createElement("h3");
    productName.innerHTML = `${product.product.name}`;
    productName.classList.add('product-name');
    cartItem.appendChild(productName);

    let amountName = document.createElement('p');
    amountName.innerHTML = `Antal`;
    cartItem.appendChild(amountName);

    let productPrice = document.createElement("h3");
/*     productPrice.innerHTML = `${product.product.price} SEK`; */
    cartItem.appendChild(productPrice);

    let selectAmount = document.createElement("select") as HTMLSelectElement;
    selectAmount.classList.add('choice');
    cartItem.appendChild(selectAmount);

    for (var i = 0; i < numbers.length; i++) {
        var option = document.createElement("option") as HTMLOptionElement;
        option.value = numbers[i];
        option.text = numbers[i];
        selectAmount.appendChild(option);
    }

    selectAmount.selectedIndex = product.amount;

    // Update product
    selectAmount.addEventListener("change", () => {
        if(selectAmount.selectedIndex == 0) {
            const ingredientIndex = storedProducts.findIndex((item: any) => item.id === product.id);
            storedProducts.splice(ingredientIndex, 1);
            
            cartIconValue.innerHTML = storedProducts.length;
    
            cartItem.remove()

            localStorage.setItem("CartList", JSON.stringify(storedProducts));
        }

        product.amount = selectAmount.selectedIndex;
        let totalAmount = 0;

        // loop and multiply with amount
        for(var i of storedProducts){
            var multiplyWithAmount = i.amount * i.product.price
            totalAmount += multiplyWithAmount;           
            }

            // Updates and removes previus sum
            while( totalSum.firstChild ) {
            totalSum.removeChild( totalSum.firstChild );
        }
        
        totalSum.appendChild( document.createTextNode(totalAmount.toString()) );

        localStorage.setItem("CartList", JSON.stringify(storedProducts));

    })

    let removeItemButton = document.createElement("button") as HTMLButtonElement;
    removeItemButton.classList.add("remove");
    removeItemButton.innerHTML = `Radera`;


    removeItemButton.addEventListener("click", () => {
        
        const ingredientIndex = storedProducts.findIndex((item: any) => item.id === product.id);
        storedProducts.splice(ingredientIndex, 1);
        
        cartIconValue.innerHTML = storedProducts.length;

        cartItem.remove()

        let totalAmount = 0;

        for(var i of storedProducts){
            var multiplyWithAmount = i.amount * i.product.price
            totalAmount += multiplyWithAmount;
            
            }
        while( totalSum.firstChild ) {
            totalSum.removeChild( totalSum.firstChild );
        }
        
        totalSum.appendChild( document.createTextNode(totalAmount.toString()) );

        localStorage.setItem("CartList", JSON.stringify(storedProducts));
      
    })
    cartItem.appendChild(removeItemButton);
}
//Kassaknappen

let checkout: HTMLButtonElement = document.getElementById("kassa") as HTMLButtonElement;
checkout.addEventListener("click", () => { 
    location.href = "./checkout.html"; 
});