/**
 * This function determines if an array is odd-heavy, meaning it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
 * @param {array} n 
 * @returns boolean 
 */
function isOddHeavy(n){
    
    const evens = n.filter(num => num % 2 === 0)
    const odds = n.filter(num => num % 2 !== 0)
    
   if((Math.min(...odds) > Math.max(...evens)) && odds.length !== 0){
     return true
    } 
    else {
      return false
    }
  }