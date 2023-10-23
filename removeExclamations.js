/**
 * This function removes exclamation points from the end of a string without the use of regex
 * @param {str} string 
 * @returns str
 */
function remove (string) {  
    string = string.split('')
    for(let i = string.length - 1; i > 0; i--){
      if(string[i] === '!')
         string.pop()
      else if(string[i] !== '!')
        return string.join('')
    }
  }