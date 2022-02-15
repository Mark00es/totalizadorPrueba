import sumar from "./sumador";
import multiplicar from "./multiplicador"

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const num1 = document.querySelector("#numero-1");
const num2 = document.querySelector("#numero-2");
const multi = document.querySelector("#multi-form");
const resp = document.querySelector("#resultado-resp");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  
  div.innerHTML = "<p> La sumas es: " + sumar(firstNumber, secondNumber) + "</p>";      
});
multi.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber1 = Number.parseInt(num1.value);  
  const secondNumber2 = Number.parseInt(num2.value);
  
  resp.innerHTML = "<p>La multiplicación es: " + multiplicar(firstNumber1, secondNumber2) + "</p>";      
});