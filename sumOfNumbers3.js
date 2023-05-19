/**
 * Given two integers a and b, which can be positive or negative, this function finds the sum of all the integers between and including them
 * @param {num} a 
 * @param {num} b 
 * @returns num
 */
function getSum(a, b){
    var max = Math.max(a, b)
    var min = Math.min(a, b)
    return (max - min + 1) * (max + min) / 2
  }