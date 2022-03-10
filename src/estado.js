function calcularImpuesto(a) {
    var resp = 0;
    if(a == "TX"){
            resp = 6.25;        
    }
    if(a == "CA"){
        resp=8.25;
    }
    return resp;
  }
  
  export default calcularImpuesto;