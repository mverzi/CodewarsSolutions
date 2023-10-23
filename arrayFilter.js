/**
 * This function filters an array to only have even numbers
 * @param {num[]} numbersArray 
 * @returns num[], only even numbers
 */
function getEvenNumbers(numbersArray){
    return numbersArray.filter(num => num % 2 === 0)
  }