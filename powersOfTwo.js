/**
 * This function returns an array of all powers of 2 from 0 to n
 * @param {int} n 
 * @returns array
 */
function powersOfTwo(n){
    var array = []
    for(var i = 0; i <= n; i++){
      array.push(2 ** i)
    }
    return array
  }