/**
 * Simple calculator
 * @param {variable} a 
 * @param {variable} b 
 * @param {variable} sign 
 * @returns Answer to problem if all variables are valid, string otherwise
 */
function calculator(a,b,sign){
    const signs = ["+", "-", "*", "/"];
    if(!signs.includes(sign) || isNaN(a) || isNaN(b)){
      return "unknown value";
    }
    else {
      switch (sign) {
          case "+":
            return a + b;
            break;
          case "-":
            return a - b;
            break;
          case "*":
            return a * b;
            break;
          case "/":
            return a / b;
            break;
      }
    }
  }