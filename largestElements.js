/**
 * This function returns the n largest elements in an array
 * @param {int} n 
 * @param {array} arr 
 * @returns array
 */
function largest(n,arr){
    console.log(n)
    return n === 0 ? [] : arr.sort((a,b) => a-b).slice(-n)
  }