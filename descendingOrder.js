/**
 * This function returns the numbers of an integer in descending order
 * @param {int} n 
 * @returns int n
 */
function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''))
  }