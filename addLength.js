/**
 * This function determines length of every word in a string
 * @param {string} str 
 * @returns string[]
 */
function addLength(str) {
    str = str.split(' ')
    for(let i = 0; i < str.length; i++){
      var wordLength = str[i].length
      str[i] = str[i] + ` ${wordLength}`
    }
    return str
  }
  