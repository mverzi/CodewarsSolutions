/**
 * Another solution to the Factorial codewars kata
 * @param {int} n 
 * @returns int
 */
function factorial(n){
    return Array.from({length: n}, (_, i) => i + 1).reverse().reduce((a, b)=> a*b, 1)
  }