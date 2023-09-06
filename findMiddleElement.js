/**
 * Finds the middle of a triplet array
 * @param {number[]} triplet 
 * @returns number
 */
function gimme (triplet) {
    var inOrder = [...triplet].sort((a, b) => a - b)
    return triplet.indexOf(inOrder[1])
  }