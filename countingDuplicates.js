/**
 * This function counts the number of repeated characters in a string
 * @param {string} text 
 * @returns int
 */
function duplicateCount(text){
    let charCount = {}
    
    for(let i = 0; i < text.length; i++){
      const char = text[i].toLowerCase()
      if(!charCount[char]){
        charCount[char] = 1
      } else {
        charCount[char]++
      }
    }
    
    let count = 0
    for (const char in charCount){
      if(charCount[char] > 1){
        count++
      }
    }
    return count
  }