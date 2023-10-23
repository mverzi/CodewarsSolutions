/**
 * This function sorts an array of strings by their length
 * @param {string[]} array 
 * @returns 
 */
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  };