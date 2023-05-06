/**
 * This function counts the occurence of every character in a given string
 * @param {str} string 
 * @returns object
 */
function count(string) {
    let charCount = {}
    
    for(let i = 0; i < string.length; i++){
      const char = string[i]
      if(!charCount[char]){
        charCount[char] = 1
      } else {
        charCount[char]++
      }
    }
    return charCount
  }