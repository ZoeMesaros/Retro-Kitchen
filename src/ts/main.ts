let cartNumber = document.getElementById("output") as HTMLSpanElement;
let header = document.querySelector(".mainHeader") as HTMLHeadElement;

window.onload = function () {
  let arrayFromStroage = JSON.parse(localStorage.getItem("CartList") || "[]");
  let arrayLength = arrayFromStroage.length;
  cartNumber.innerHTML = arrayLength;
};

let navSection = document.createElement("section") as HTMLElement;
navSection.innerHTML = `
  <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="/src/html/products.html">
        <li>Alla produkter</li>
      </a>
      <a href="/html/products.html">
        <li>Köksmaskiner</li>
      </a>
      <a href="/src/html/products.html">
        <li>Vitvaror</li>
      </a>
      <a href="/src/html/about.html">
        <li>Om oss</li>
      </a>
      <a href="/src/html/contact.html">
        <li>Kontakt</li>
      </a>
    </ul>
  </div>
</nav>
<nav class="desktop">
  <ul class="desktop__list">
    <li><a href="index.html">Start</a></li>
    <li><a href="news.html">Nyheter</a></li>
    <li><a href="products.html">Sortiment</a></li>
    <li><a href="about.html">Om oss</a></li>
    <li><a href="contact.html">Kontakt</a></li>
  </ul>
</nav>
  `;

header.append(navSection);
