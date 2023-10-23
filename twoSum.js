/**
 * This function takes an array of numbers and a target number and finds two different items in the array that, when added together, give the target value. 
 * @param {*} numbers 
 * @param {*} target 
 * @returns 
 */
function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
      for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
          return [i, j]
        }
      }
    }
  }