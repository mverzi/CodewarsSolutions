/**
 * This function returns the average of an array rounded down
 * @param {array} marks 
 * @returns int
 */
function getAverage(marks){
    return Math.floor(marks.reduce((a,b) => a + b) / marks.length)
  }