/**
 * This function checks if two arrays have the "same" elements, with the same multiplicities
 * @param {array} array1 
 * @param {array} array2 
 * @returns boolean
 */
function comp(array1, array2){
    if(!array1 || !array2 || array1.length !== array2.length)
      return false
    return array1.map(num => num * num).sort().toString() === array2.sort().toString()
  }