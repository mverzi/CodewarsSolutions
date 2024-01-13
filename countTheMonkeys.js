/**
 * This function returns an array from 1 to n
 * @param {int} n 
 * @returns int array
 */
function monkeyCount(n) {
    return [...Array(n+1).keys()].slice(1)
  }