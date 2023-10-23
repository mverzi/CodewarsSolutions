/**
 * This function sorts an array of numbers, or returns the empty array if no numbers are present
 * @param {int arr} nums 
 * @returns int array
 */
function solution(nums){
    return nums != null ? nums.sort((a,b) => a-b) : []
  }