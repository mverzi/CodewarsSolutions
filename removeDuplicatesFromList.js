/**
 * This function removes duplicates from an array 
 * @param {number[]} a 
 * @returns number[]
 */
function distinct(a) {
    return [...new Set(a)];
  }