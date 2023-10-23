/**
 * This function takes an array of at least 3 numbers with only 1 unique integer
 * and returns the unique integer.
 * @param {int} arr 
 * @returns unique int in arr
 */
function findUniq(arr) {
    arr = arr.sort()
    if(arr[0] !== arr[1]){
      return arr[0]
    }
    return arr[arr.length - 1]
  }