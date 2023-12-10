function isPowerOfTwo(n){
    if(n === 1)
      return true
    while(n >= 1){
      n /= 2
      if(n === 1)
        return true;
    }
    return false;
  }