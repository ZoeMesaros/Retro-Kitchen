var hamburger = document.querySelector(".hamburger"); //Lägga till datatyp
hamburger.addEventListener("click", function () {
    this.classList.toggle("close");
});
