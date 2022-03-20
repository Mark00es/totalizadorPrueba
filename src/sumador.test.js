import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia sumar dos num", () => {
    expect(sumar(-1, 0)).toEqual(-1);
  });
  it("deberia sumar dos negativos", () => {
    expect(sumar(-1, -3)).toEqual(-4);
  });
  it("deberia sumar dos fracciones", () => {
    expect(sumar(1/2, 1/2)).toEqual(1);
  });
});
