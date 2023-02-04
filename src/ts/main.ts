let cartNumber = document.getElementById('output') as HTMLSpanElement;

window.onload = function(){
    let arrayFromStroage = JSON.parse(localStorage.getItem("CartList") || "[]");
    let arrayLength = arrayFromStroage.length;
    cartNumber.innerHTML = arrayLength;
  };