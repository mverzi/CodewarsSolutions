/**
 * This function returns an array with 1 added to the number the array represents
 * @param {array} arr 
 * @returns array 
 */
function upArray(arr){
    if(arr.length == 0) return null
    for(num in arr){
      if(arr[num] < 0 || arr[num] > 9){
        return null
      }
    }
    arr = arr.reverse()
    for(num in arr){
      if(arr[num] == 9){
          arr[num] = 0
        if(arr[num] == arr[arr.length-1]){
           arr.push(1)
           }
      } else {
          arr[num] += 1
          break
      }
    }
    return arr.reverse()
  }