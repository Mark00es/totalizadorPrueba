function calcularImpuesto(a) {
    var resp = 0;
    switch(a){
        case "UT":
            resp = 6.65;
            break;
        case "NV":
            resp = 8.00;
            break;
        case "TX":
            resp = 6.25;
            break;
        case "AL":
            resp = 4.00;
            break;
        case "CA":
            resp = 8.25;
            break;
    }
    return resp;
  }
  
  export default calcularImpuesto;
  