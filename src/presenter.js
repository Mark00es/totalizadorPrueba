const cant = document.querySelector("#cantidad-item");
const form = document.querySelector("#cantidad-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(cant.value);
  
  div.innerHTML = "<p> La cantidad es: " + firstNumber + "</p>";      
});