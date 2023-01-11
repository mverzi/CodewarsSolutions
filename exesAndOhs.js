/**
 * This function determines if a string has the same number of x's and o's
 * @param {string} str 
 * @returns boolean
 */
function XO(str) {
    str = str.toLowerCase().split('')
    return str.filter(char => char === 'x').length === str.filter(char => char === 'o').length
  }