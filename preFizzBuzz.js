/**
 * This function returns an array with values 1 to n
 * @param {int} n 
 * @returns array
 */
function preFizz(n) {
    return [...Array(n+1).keys()].slice(1)
  }