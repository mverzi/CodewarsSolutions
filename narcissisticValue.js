/**
 * This function determines if the sum of a positive number is the sum of its own digits, each raised to the power of the number of digits
 * @param {int} value 
 * @returns boolean
 */
function narcissistic(value) {
    const original = value
    value = Array.from(String(value), Number)
    const power = value.length
    var sum = value.map(num => Math.pow(num, power)).reduce((a, b) => a + b)
    
    if(sum === original)
      return true
    else
      return false
  }