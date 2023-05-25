/**
 * This function takes an array of numbers and sorts the odd numbers in ascending order while leaving the even numbers at their original positions.
 * @param {number[]} array 
 * @returns number[]
 */
function sortArray(array) {
    const oddNumbers = []
    const oddPositions = []
    
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        oddNumbers.push(array[i])
        oddPositions.push(i)
      }
    }
    
    oddNumbers.sort((a, b) => a - b)
    
    oddPositions.forEach((position, index) => {
      array[position] = oddNumbers[index];
    })
    
    return array
  }