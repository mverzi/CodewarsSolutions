/**
 * This function finds the indexes of the capital letters in a word
 * @param {string} word 
 * @returns array of ints
 */
var capitals = function (word) {
    let capitals = []
      word.split('')
    for(let i = 0; i < word.length; i++){
      if(word[i] === word[i].toUpperCase()){
        capitals.push(i)
      }
    }
    return capitals
  };