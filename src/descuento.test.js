import mostrarDescu from "./Descuento";

describe("Impuesto", () => {
  it("deberia calcular el descuento de 12340", () => {        
    expect(mostrarDescu(12340)).toEqual(10);
  });  
  it("deberia calcular el impuesto de 10", () => {        
    expect(mostrarDescu(10)).toEqual(0);
  });  
});
