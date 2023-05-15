/**
 * This function merges two arrays into one sorted array
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns number[]
 */
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a,b) => a-b)
}