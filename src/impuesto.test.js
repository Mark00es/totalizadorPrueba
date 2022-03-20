import mostrarImpu from "./estado";

describe("Impuesto", () => {
  it("deberia calcular el impuesto de UT", () => {        
    expect(mostrarImpu("UT")).toEqual(6.65);
  });  
  it("deberia calcular el impuesto de TX", () => {        
    expect(mostrarImpu("TX")).toEqual(6.25);
  });  
});
