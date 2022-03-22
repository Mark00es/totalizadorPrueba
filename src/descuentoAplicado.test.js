import calcularDes from "./calcularDescuento";
import calcularImpuesto from "./calcularImpuesto";
import mostrarImpu from "./estado";
import mostrarDescu from "./Descuento";

describe("Descuento", () => {
  it("deberia calcular el Descuento de 3000 cant precio 4 y de NV", () => {        
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
  it("deberia calcular el Descuento de 12000 cant precio 23 y de NV", () => {        
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

