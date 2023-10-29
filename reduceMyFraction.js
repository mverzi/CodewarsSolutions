function reduce(fraction) {
    var x = fraction[0];
    var y = fraction[1];
    
    while(y){
      var temp = y;
      y = x % y;
      x = temp;
    }
    
    fraction[0] /= x;
    fraction[1] /= x;
    
    return fraction;
  }