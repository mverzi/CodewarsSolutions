/**
 * This function removes the smallest element of an array
 * @param {int array} numbers 
 * @returns int array
 */
function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    var smallest = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallest, 1)
    return copy
  }