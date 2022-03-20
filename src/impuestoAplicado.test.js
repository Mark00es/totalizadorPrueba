import calcularImpuesto from "./calcularImpuesto";
import mostrarImpu from "./estado";

describe("Impuesto", () => {
  it("deberia calcular el impuesto de UT", () => {  
    const cant = 3000;
    const prec = 4;    
    const est = mostrarImpu("UT");
    const tot = cant * prec;        
    expect(calcularImpuesto(tot,est)).toEqual(798);
  });  
  it("deberia calcular el impuesto de NV", () => {        
    const cant = 12000;
    const prec = 23;    
    const est = mostrarImpu("NV");
    const tot = cant * prec;
    expect(calcularImpuesto(tot,est)).toEqual(22080);
  });
});
