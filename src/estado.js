function mostrarImpu(a) {
    var resp = 0;
    if(a == "CA"){
        resp=8.25;
    }
    if(a == "TX"){
        resp = 6.25;        
    }
    return resp;
  }
  
  export default mostrarImpu;