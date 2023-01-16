/**
 * This function reverses all the words in the input string
 * "I like cookies" -> "cookies like I"
 * @param {string} str 
 * @returns string
 */
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}