function mostrarDescu(a) {
    var resp = 0;        
    if(a>=1000 && a<3000)
        resp = 3.00; 
    else if(a>=3000 && a<7000)
        resp = 5.00;      
    return resp;
  }

  export default mostrarDescu;