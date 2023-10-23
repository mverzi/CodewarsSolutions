/**
 * This function takes an array mixed items(numbers, strings, etc) and returns all the duplicated items in an array
 * @param {[]} arr 
 * @returns array[]
 */
function duplicates(arr) {
    return [...new Set(arr.filter((num, index) => arr.indexOf(num) !== index))]
  }