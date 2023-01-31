/**
 * This function removes the smallest value from an array of integers
 * @param {array} numbers 
 * @returns array
 */
function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    var smallest = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallest, 1)
    return copy
  }