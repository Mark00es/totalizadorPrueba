import mostrarImpu from "./estado";
import multiplicar from "./multiplicador";
import calcularImpuesto from "./calcularImpuesto";

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
  const porceImpu = mostrarImpu(est);
  const precioNeto = multiplicar(firstNumber,SecondNumber);
  const impu = calcularImpuesto(precioNeto,porceImpu);

  div.innerHTML = "<p>Cantidad de item: " + firstNumber + "</p>";      
  div.innerHTML = div.innerHTML +  "<p>Precio por Item: " + SecondNumber + "</p>";
  div.innerHTML = div.innerHTML +  "<p>Codigo de estado: " + est +"Porcentaje: "+porceImpu +"</p>";
  div.innerHTML = div.innerHTML +  "<p>Precio Neto: " + precioNeto + "</p>";
  div.innerHTML = div.innerHTML +  "<p>Impuesto para "+ est+"(%"+porceImpu+"): $" + impu + "</p>";

});