let cartNumber = document.getElementById('output') as HTMLSpanElement;

window.onload = function(){
    let arrayFromStroage = JSON.parse(localStorage.getItem("CartList") || "[]");
    let arrayLength = arrayFromStroage.length;
    console.log(arrayLength);
    cartNumber.innerHTML = arrayLength;
  };