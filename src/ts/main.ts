const hamburger: HTMLInputElement= document.querySelector(".hamburger") as HTMLInputElement;//Lägga till datatyp
hamburger.addEventListener("click", function(){
    this.classList.toggle("close");
})

