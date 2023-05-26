/**
 * Given an integer n and two other values, this function will build an array of size n filled with these two values alternating
 * @param {int} n 
 * @param {any} firstValue 
 * @param {any} secondValue 
 * @returns array
 */
function alternate(n, firstValue, secondValue){
    let result = []
    
    for(let i = 0; i < n; i++){
      if(i % 2 === 0)
        result.push(firstValue)
      else
        result.push(secondValue)
    }
    return result
  }