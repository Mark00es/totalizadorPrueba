import calcularDes from "./calcularDescuento";
import calcularImpuesto from "./calcularImpuesto";
import mostrarImpu from "./estado";
import mostrarDescu from "./Descuento";

describe("Impuesto", () => {
  it("deberia calcular el descuento de 12340", () => {        
    /*calcularDes(PrecioNeto,ImpuestoAplicado)*/    
    const cant = 3000;
    const prec = 4;    
    const est = "NV"
    const tot = cant * prec;
    const imp = mostrarImpu(est);
    const resp = calcularImpuesto(tot,imp);
    const des = mostrarDescu(cant);
    expect(calcularDes(tot,resp,des)).toEqual(648);
  });
  it("deberia calcular el descuento de 12340", () => {        
    /*calcularDes(PrecioNeto,ImpuestoAplicado)*/    
    const cant = 12000;
    const prec = 23;    
    const est = "NV"
    const tot = cant * prec;
    const imp = mostrarImpu(est);
    const resp = calcularImpuesto(tot,imp);
    const des = mostrarDescu(cant);
    expect(calcularDes(tot,resp,des)).toEqual(29808);
  });
});
