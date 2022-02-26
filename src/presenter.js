import calcularImpuesto from "./estado";
import multiplicar from "./multiplicador";

const cant = document.querySelector("#cantidad-item");
const precio = document.querySelector("#precio-item");
const form = document.querySelector("#cantidad-form");
const estado = document.querySelector("#estado-item");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(cant.value);
  const SecondNumber = Number.parseInt(precio.value);
  const est = estado.value;
  const precioNeto = multiplicar(firstNumber,SecondNumber);
  const porceImpu = calcularImpuesto(est);

  div.innerHTML = "<p>Cantidad de item: " + firstNumber + "</p>";      
  div.innerHTML = div.innerHTML +  "<p>Precio por Item: " + SecondNumber + "</p>";
  div.innerHTML = div.innerHTML +  "<p>Codigo de estado: " + est +" Porcentaje: "+porceImpu +"</p>";
  div.innerHTML = div.innerHTML +  "<p>Precio Neto ("+firstNumber+"*$"+SecondNumber+"): $" + precioNeto + "</p>";

});