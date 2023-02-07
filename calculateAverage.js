/**
 * This function calculates the average of an array
 * @param {int array} array 
 * @returns int
 */
function find_average(array) {
    return array.length != 0 ? array.reduce((a,b) => a+b) / array.length : 0
  }