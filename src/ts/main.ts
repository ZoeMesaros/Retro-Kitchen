let cartNumber = document.getElementById("output") as HTMLSpanElement;
let header = document.querySelector(".mainHeader") as HTMLHeadElement;
let footerSection = document.querySelector(".mainFooter") as HTMLHeadElement;
let cartIconValue = document.getElementById("output") as HTMLDivElement;

window.onload = function () {
  let arrayFromStroage = JSON.parse(localStorage.getItem("CartList") || "[]");
  let arrayLength = arrayFromStroage.length;
  6;
  let productCount = 0;

  for (let j = 0; j < arrayFromStroage.length; j++) {
    const product = arrayFromStroage[j];
    productCount += product.amount;
  }

  cartNumber.innerHTML = productCount.toString();

  let navSection = document.createElement("section") as HTMLElement;
  navSection.innerHTML = `
  <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
        <li><a href="/html/index.html">Hem</a></li>
        <li><a href="/html/products.html">Produkter</a></li>
        <li><a href="/html/about.html">Om oss</a></li>
        <li><a href="/html/contact.html">Kontakt</a></li>
    </ul>
  </div>
</nav>
<nav class="desktop">
  <ul class="desktop__list">
    <li><a href="/index.html">Start</a></li>
    <li><a href="/html/products.html">Sortiment</a></li>
    <li><a href="/html/about.html">Om oss</a></li>
    <li><a href="/html/contact.html">Kontakt</a></li>
  </ul>
</nav>
  `;
  header.append(navSection);

  let footer = document.createElement("footer") as HTMLElement;
  footer.innerHTML = `
<ul className="socialMedia">
<li>
  <i className="fa-brands fa-facebook"></i>
</li>
<li>
  <i className="fa-brands fa-instagram"></i>
</li>
<li>
  <i className="fa-brands fa-twitter"></i>
</li>
</ul>
<ul className="adress">
<li>Retro Kitchen AB</li>
<li>Drottninggatan 1</li>
<li>123 45</li>
<li>Stockholm</li>
</ul>
`;
  footerSection.append(footer);
};
