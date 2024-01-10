function digitalRoot(n) {
    while(n >= 10){
          numArray = Array.from(String(n), Number);
          n = numArray.reduce((a, b) => a + b)
      }
      return n
  }