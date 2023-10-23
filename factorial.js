/**
 * This function returns n! from the input n
 * @param {int} n 
 * @returns n!
 */
const factorial = n => {
    return n <= 1 ? 1 : n * factorial(n - 1);
  };