const cant = document.querySelector("#cantidad-item");
const form = document.querySelector("#cantidad-form");
const div = document.querySelector("#resultado-div");

const precio = document.querySelector("#precio-item");
const prec = document.querySelector("#precio-form");
const resp1 = document.querySelector("#resultado-prec");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(cant.value);
  
  div.innerHTML = "<p> La cantidad es: " + firstNumber + "</p>";      
});
prec.addEventListener("submit", (event) => {
  event.preventDefault();

  const SecondNumber = Number.parseInt(precio.value);
  
  resp1.innerHTML = "<p> La PrEcio es: " + SecondNumber + "</p>";      
});